var polyfill = require("polyfill");

global.matchMedia =
    global.matchMedia ||
    function () {
        return {
            matches: false,
            addListener: function () { },
            removeListener: function () { },
        };
    };