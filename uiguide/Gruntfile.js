module.exports = function(grunt) {
    // Do grunt-related things in here
    grunt.initConfig({
        sass: {                              // Task
            dist: {                            // Target
              files: [{                         // Dictionary of files
                expand: true,
                cwd: 'static/commonui/www/scss', 
                src: ['**/*.scss'], //路径会映射到目标目录的层级
                dest: 'static/commonui/www/css',
                ext: '.css'
              }]
            }
        },
        styledocco: {
            dist: {
                options: {
                    name: 'UIGuide'
                },
                files: {
                    'docs': ['static/commonui/www/css'] //制定目录会根据下面的目录结构生成菜单的层级
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-styledocco');
    grunt.registerTask('default', ['sass', 'styledocco']);
};
