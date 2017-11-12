module.exports = function(grunt){
  grunt.initConfig({
    less: {
      'src/ui/styles/css/style.css': ['src/ui/styles/*.less']
    },
    watch: {
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
  
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.registerTask('default', ['less', 'watch']);
};