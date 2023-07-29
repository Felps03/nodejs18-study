const test = require('node:test');
const assert = require('assert/strict');
const sum = require('./math');

test('Sum function', async t => {
    await t.test('It should add two numbers', () => {
        assert.equal(sum(2,2), 4);
    });
    await t.test('It should add two numbers', () => {
        assert.notEqual(sum(3,2), 1);
    });
});