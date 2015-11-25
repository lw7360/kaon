(function () { 'use strict';

    var greet = function () {
        return 'Hello World!';
    };

    // Node.js modules and those from npm
    // are required the same way as always.
    var os = require('os');
    var app = require('remote').require('app');
    var jetpack = require('fs-jetpack').cwd(app.getAppPath());

    // Holy crap! This is browser window with HTML and stuff, but I can read
    // here files like it is node.js! Welcome to Electron world :)
    console.log(jetpack.read('package.json', 'json'));

    // window.env contains data from config/env_XXX.json file.
    var envName = window.env.name;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('greet').innerHTML = greet();
        document.getElementById('platform-info').innerHTML = os.platform();
        document.getElementById('env-name').innerHTML = envName;
    });

})();
//# sourceMappingURL=app.js.map