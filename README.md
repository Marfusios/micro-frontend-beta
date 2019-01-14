![logo](logo.png)
# BETA - micro frontend [![Build Status](https://travis-ci.com/Marfusios/micro-frontend-beta.svg?branch=master)](https://travis-ci.com/Marfusios/micro-frontend-beta) [![demo link](https://img.shields.io/badge/demo-link-blue.svg)](http://mkotas.cz/micro-frontend-gateway)

This is example of the one independent micro frontend. 
A primary application (gateway to the whole system) can be found here: [github.com/marfusios/micro-frontend-gateway](https://github.com/Marfusios/micro-frontend-gateway)


Current implementation is based on [Angular](https://angular.io/) and [Angular Package Format](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/preview) (via library [ng-packagr](https://github.com/ng-packagr/ng-packagr)).

Deployed at: [mkotas.cz/micro-frontend-beta](http://mkotas.cz/micro-frontend-beta)

### Usage

* local development
    * `npm start`
* local deployment
    * `npm run package`
    * `npm run server`
    * open browser at 'localhost:3333'
    * bundle can be downloaded from 'localhost:3333/bundle.umd.js'
* remote deployment
    * `npm build-deploy`
    * copy content of 'deployment' directory into web server
