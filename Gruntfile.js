module.exports = function(grunt) {
    var path = require('path');

    require('load-grunt-config')(grunt, {
        configPath: [
            path.join(process.cwd(), 'grunt/base/options'),
            path.join(process.cwd(), 'grunt/patternlab/options')
        ],

        overridePath: [
            path.join(process.cwd(), 'grunt/custom/overrides')
        ],

        data: {
            config: require(path.join(process.cwd(), 'config.js')),
        },

        loadGruntTasks: {
            config: require('./package.json'),
        },
    });
};
