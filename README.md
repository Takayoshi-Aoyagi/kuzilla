# Kuzilla

<img src="http://takayoshi-aoyagi.github.io/kuzilla/public/images/kuzilla.png" width="100px" height="100px">

*Kuzilla* is a simple viewer for Docker Registry 2.0.

This repository contains the web frontend, written in AngularJS.
And also contains REST API, written in node.js with express

## Requirement

- Docker Registry 2.0 or later
- node.js
- bower

## Functionality

- Lists docker repositories
- Lists tags in a repository.
- Delete repositories (NOT implemented yet)
- Delete tags (NOT implemented yet)

## Getting Started

```
$ git clone https://github.com/Takayoshi-Aoyagi/kuzilla
$ cd kuzilla
$ npm install
$ cd public
$ bower install
$ cd ..
$ env BASE_URL=YOUR_DOCKER_REGISTRY_URL bin/www
```

e.g.) env http://127.0.0.1:13245 bin/www



