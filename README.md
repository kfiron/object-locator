# object-locator

[![Build Status](https://travis-ci.org/kfiron/object-locator.svg?branch=master)](https://travis-ci.org/kfiron/object-locator)

This small lib helps a developer to go directly inside object properties for any given depth and to return the data

## The problem

```javascript
   const obj = {a: {b: {c: 'd'}}};
   
   // get a.b.c - verbose way
   if(a && a.b && a.c)
     return a.b.c
```

## object-locator solution

```javascript
   const locator = require('object-locator');
   const obj = {a: {b: {c: 'd'}}};
   
   // elegant way
   locator(obj).a.b.c.getOrElse('bla') // === 'd'
   // or for non exist object
   locator(obj).a.b.not.exist.getOrElse('bla') // === 'bla'
```

## Install
```shell
$ npm install --save-dev object-locator
```

* Implemented via ES6 proxy, so it it compatible with node 6 >
