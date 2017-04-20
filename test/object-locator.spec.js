'use strict';
const expect = require('chai').expect,
  objectLocator = require('..');

describe('object-locator', () => {

  var obj = {foo: 'bar', a: {b: {c: 'd'}}};

  it('simple use case', () => {
    expect(objectLocator(obj).foo.getOrElse('empty')).to.equal('bar');
  });
  it('some more depth', () => {
    expect(objectLocator(obj).a.b.c.getOrElse('empty')).to.equal('d');
  });
  it('not found', () => {
    expect(objectLocator(obj).bar.baz.getOrElse('empty')).to.equal('empty');
  });

});
