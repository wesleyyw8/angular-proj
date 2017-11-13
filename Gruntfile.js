module.exports = function(grunt){
  const jsFiles = ['src/ui/controllers/*.js', 'src/ui/directives/**/*.js', 'src/ui/services/*.js'];
  grunt.initConfig({
    concat:{
      js:{
        src: ['src/ui/controllers/*.js', 'src/ui/directives/**/*.js', 'src/ui/services/*.js' ],
        dest: 'src/ui/application.js'
      }
    },
    less: {
      'src/ui/styles/css/style.css': ['src/ui/styles/*.less']
    },
    watch: {
      less: {
        files: ['src/ui/styles/*.less', ...jsFiles],
        tasks: ['less', 'concat'],
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
  grunt.registerTask('default', ['concat','less', 'watch']);
};