module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          files: [{                         // Dictionary of files
            expand: true,
            cwd: 'static/commonui/scss', 
            src: ['**/*.scss'],
            dest: 'static/commonui/css',
            ext: '.css'
          }]
        }
      }
    });
    grunt.initConfig({
        styledocco: {
            dist: {
                options: {
                    name: 'UIGuide'
                },
                files: {
                    'docs': ['static/commonui/css']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-styledocco');
    grunt.registerTask('default', ['styledocco']);
};
