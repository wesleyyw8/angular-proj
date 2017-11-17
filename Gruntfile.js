const path = require('path')

module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  const jsFiles = ['src/ui/config/config.js', 'src/ui/controllers/*.js', 'src/ui/directives/**/*.js', 'src/ui/services/*.js'];

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: {
          'src/ui/application-babel.js': 'src/ui/application.js'
        }
      }
    },
    concat:{
      js:{
        src: jsFiles,
        dest: 'src/ui/application.js'
      }
    },
    less: {
      'src/ui/styles/css/style.css': ['src/ui/styles/*.less']
    },
    watch: {
      js: {
        files: jsFiles,
        tasks: ['concat', 'babel']
      },
      less: {
        files: ['src/ui/styles/*.less'],
        tasks: ['less'],
        options: {
          livereload: true
        }
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['src/ui/styles/*.less']
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'concat', 'babel', 'watch']);
};