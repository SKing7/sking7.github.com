module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          files: [{                         // Dictionary of files
            'expand': true,
            'cwd': 'static/commonui/',       // 'destination': 'source'
            'src': ['scss/*.scss'],
            'dest': ['css'],
            'ext': '.css'
          }]
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['sass']);
};
