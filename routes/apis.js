var express = require('express');
var router = express.Router();
var util = require('util');
var url = require('url');
var rest = require('restler');
var async = require('async');

function getBaseUrl() {
    var base = process.env.BASE_URL,
	urlv2,
	len, x;
    urlv2 = url.resolve(base, '/v2');
    x = url.parse(urlv2);
    if (!x.protocol || !x.hostname || !x.port || !x.pathname) {
	console.log(x);
	console.log(util.format("Invalid URL for Registry API [%s]", base));
	process.exit(1);
    }
    console.log(util.format("API URL [%s]", urlv2));
    return urlv2;
}

var BASE_URL = getBaseUrl();

router.get('/repositories', function(req, res) {
    console.log(BASE_URL)
    rest.get(BASE_URL + '/_catalog').on('complete', function (result) {
	res.status(200).send(result.repositories);
    });
});

function getManifest(name, reference, callback) {
    var url = util.format(BASE_URL + '/%s/manifests/%s', name, reference);
    rest.get(url).on('complete', function (result) {
	var err;
	callback(err, result);
    });
}

router.get('/repositories/:name', function(req, res) {
    var name = req.params.name,
	url = util.format(BASE_URL + '/%s/tags/list', name),
	json = {};
    rest.get(url).on('complete', function (result) {
	json.name = result.name;
	json.tags = result.tags;
	json.tag_values = {};
	async.each(result.tags, function (tag, next) {
	    var manifest = getManifest(name, tag, function (err, data) {
		console.log(data)
		data.history.forEach(function (h, i) {
		    console.log(h);
		    console.log("");
		    var xxx = JSON.parse(h.v1Compatibility);
		    data.history[i] = { v1Compatibility: xxx };
		});
		json.tag_values[tag] = data;
		console.log(JSON.stringify(data, null, "  "));
		next(err);
	    });
	}, function (err) {
	    res.status(200).send(json);	    
	});
    });
});

module.exports = router;
