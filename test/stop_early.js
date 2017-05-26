define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var parse = require('minimist/');
var test = require('tape');

test('stops parsing on the first non-option when stopEarly is set', function (t) {
    var argv = parse(['--aaa', 'bbb', 'ccc', '--ddd'], {
        stopEarly: true
    });

    t.deepEqual(argv, {
        aaa: 'bbb',
        _: ['ccc', '--ddd']
    });

    t.end();
});

return module.exports;});
