var express = require('express');
var router = express.Router();
var util = require('util');
var rest = require('restler');
var async = require('async');

router.get('/repositories', function(req, res) {
    rest.get('http://54.65.213.68:13245/v2/_catalog').on('complete', function (result) {
	console.log(result);
	res.status(200).send(result.repositories);
    });
});

function getManifest(name, reference, callback) {
    var url = util.format('http://54.65.213.68:13245/v2/%s/manifests/%s', name, reference);
    rest.get(url).on('complete', function (result) {
	var err;
	callback(err, result);
    });
}

router.get('/repositories/:name', function(req, res) {
    var name = req.params.name,
	url = util.format('http://54.65.213.68:13245/v2/%s/tags/list', name),
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
