'use strict';

/**
 * Minimal Grunt webserver and build script.
 *
 * Based on: https://gist.github.com/pete-otaqui/5384285
 **/

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost'
            }
        },
        watch: {
          scripts: {
            files: ['test/*','test/js/*'],
            tasks: ['jshint'],
            options: {
              nospawn: true
            },
          },
        }
    });
    
    grunt.registerTask('server', function (target) {
        grunt.task.run([
            'watch'
        ]);
    });
};