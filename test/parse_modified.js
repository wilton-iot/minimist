define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parse = require('minimist/');
var test = require('tape');

test('parse with modifier functions' , function (t) {
    t.plan(1);
    
    var argv = parse([ '-b', '123' ], { boolean: 'b' });
    t.deepEqual(argv, { b: true, _: [123] });
});

return module.exports;});
