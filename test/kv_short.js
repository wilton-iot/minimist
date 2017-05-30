define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parse = require('minimist/');
var test = require('tape-compat');

test('short -k=v' , function (t) {
    t.plan(1);
    
    var argv = parse([ '-b=123' ]);
    t.deepEqual(argv, { b: 123, _: [] });
});

test('multi short -k=v' , function (t) {
    t.plan(1);
    
    var argv = parse([ '-a=whatever', '-b=robots' ]);
    t.deepEqual(argv, { a: 'whatever', b: 'robots', _: [] });
});

return module.exports;});
