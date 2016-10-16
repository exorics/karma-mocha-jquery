// Karma configuration
// Generated on Fri Oct 07 2016 22:53:03 GMT+0800 (CST)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'chai-jquery', 'seajs', 'chai', 'fixture', 'jquery-1.6.4'],

        plugins: [
            'karma-chai',
            'karma-chai-jquery',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-fixture',
            'karma-html2js-preprocessor',
            'karma-jquery',
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-seajs'

        ],

        // list of files / patterns to load in the browser
        files: [
            'src/**/*.js',
            'tests/cases/**/*.js',
            'tests/test-main.js'
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage'],
            'tests/**/*.html': ['html2js']

        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            // cf. http://gotwarlost.github.com/istanbul/public/apidocs/
            type: 'html',
            dir: 'coverage/'
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        client: {
            mocha: {
                // change Karma's debug.html to the mocha web reporter
                reporter: 'html'/*,
                require: [require.resolve('bdd-lazy-var/bdd_lazy_var_global')],
                ui: 'bdd-lazy-var/global'*/
            }
        }

    })
}
