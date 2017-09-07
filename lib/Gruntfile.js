module.exports = function (grunt) {

    grunt.initConfig({
        jshint: {
            options: {
                predef: ["document", "console", "$", "$scope", "firebase"],
                esnext: true,
                globalstrict: true,
                globals: {
                    "angular": true,
                    "app": true
                }
            },
            files: ['../app/**/*.js']
        },
        sass: {
            dist: {
                files: {
                    '../css/main.css': '../sass/main.scss'
                }
            }
        },
        connect: {
            server: {
              options: {
                base: '../',
                hostname: 'localhost',
                port: 3000,
                livereload: true,
                open: true
              }
            }
          },
          watch: {
            options: {
              livereload: true
            },
            index: {
                files: [
                    "../app/**/*.html",
                    "../partials/**/*.html"
                ]
              },
            javascripts: {
                files: ['../app/**/*.js'],
                tasks: ['jshint']
            },
            sass: {
                files: ['../sass/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.registerTask('default', ['jshint', 'sass', 'connect', 'watch']);
};
