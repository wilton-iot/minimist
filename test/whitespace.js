define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parse = require('minimist/');
var test = require('tape');

test('whitespace should be whitespace' , function (t) {
    t.plan(1);
    var x = parse([ '-x', '\t' ]).x;
    t.equal(x, '\t');
});

return module.exports;});
