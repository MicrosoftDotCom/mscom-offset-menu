module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Compile css/*.scss Sass files
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/msdotcomoffsetmenu.css': 'src/scss/msdotcomoffsetmenu.scss'
                }
            }
        },

        autoprefixer: {
            options: {
                map: false
            },
            dist: {
                files: {
                    'src/css/msdotcomoffsetmenu.css': 'src/css/msdotcomoffsetmenu.css'
                }
            }
        }

    });

    // Load Grunt modules
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');

    // Set Grunt tasks
    grunt.registerTask('default', ['sass', 'autoprefixer']);
}
