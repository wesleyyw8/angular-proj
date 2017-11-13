const path = require('path')

module.exports = function(grunt){
  require('load-grunt-tasks')(grunt);
  const jsFiles = ['src/ui/config/config.js', 'src/ui/controllers/*.js', 'src/ui/directives/**/*.js', 'src/ui/services/*.js'];

  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: path.resolve(__dirname),
          // mainConfigFile: 'path/to/config.js',
          // name: 'path/to/almond', /* assumes a production build using almond, if you don't use almond, you
                                     // need to set the "includes" or "modules" option instead of name */
          include: ['src/ui/application.js'],
          out: 'src/ui/application.module.js'
        }
      }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['env']
      },
      dist: {
        files: {
          'src/ui/application.es.js': 'src/ui/application.module.js'
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
        tasks: ['concat', 'babel', 'requirejs']
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
  grunt.registerTask('default', ['less', 'concat', 'babel', 'requirejs', 'watch']);
};