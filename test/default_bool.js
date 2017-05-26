define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var test = require('tape');
var parse = require('minimist/');

test('boolean default true', function (t) {
    var argv = parse([], {
        boolean: 'sometrue',
        default: { sometrue: true }
    });
    t.equal(argv.sometrue, true);
    t.end();
});

test('boolean default false', function (t) {
    var argv = parse([], {
        boolean: 'somefalse',
        default: { somefalse: false }
    });
    t.equal(argv.somefalse, false);
    t.end();
});

test('boolean default to null', function (t) {
    var argv = parse([], {
        boolean: 'maybe',
        default: { maybe: null }
    });
    t.equal(argv.maybe, null);
    var argv = parse(['--maybe'], {
        boolean: 'maybe',
        default: { maybe: null }
    });
    t.equal(argv.maybe, true);
    t.end();

})

return module.exports;});
