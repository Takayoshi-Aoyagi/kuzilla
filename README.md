# Kuzilla

*Kuzilla* is a simple viewer for Docker Registry.

This repository contains the web frontend, written in AngularJS.
And alse contains REST API, written in node.js with express

## Requirement

・Docker Registry 2.0 or later
・node.js
・bower

## Functionality

・Lists docker repositories
・Lists tags in a repository.
・Delete repositories (NOT implemented yet)
・Delete tags (NOT implemented yet)

## Getting Started

clone git repository.

$ cd kuzilla
$ npm install
$ cd public
$ bower install
$ cd ..
$ env YOUR_DOCKER_REGISTRY_URL bin/www

e.g.) env http://127.0.0.1:13245 bin/www



