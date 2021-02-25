module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      js: {
        src:['js/*.js'],
        dest: 'build/script.js'
      },
      css: {
        src:['css/*.css'],
        dest: 'build/styles.css'
      }
    },
    'compile-handlebars': {
      dynamicTemplate: {
        files: [{
          src: 'views/home.hbs',
          dest: 'tmp/dynamicTemplateData.html'
        }]
      }
    },
    handlebars_html: {
      options: {
        
      },
      files: {
        'dest/default_options': ['src/views/home'],
      },
      
    },
    'handlebarsLayouts': {
      home: {
        files:{
          'dist/home.html': 'src/views/home.hbs'
        }
      }
    },
    handlebars: {
      compile: {
        options: {
        
        },
        files: {
          'temp/result.html': 'views/home.hbs',
        
        }
      }
    }
    

  })


grunt.loadNpmTasks('grunt-compile-handlebars');
// grunt.loadNpmTasks('grunt-handlebars-html');
// grunt.loadNpmTasks("grunt-handlebars-layouts");
grunt.loadNpmTasks('grunt-contrib-handlebars')

 // Register Task
grunt.registerTask('concat-js', ['concat:js'])
grunt.registerTask('concat-css', ['concat:css'])
// grunt.registerTask('hbs-to-html', ['handlebars_html'])
grunt.registerTask('hbs-to-html',['compile-handlebars'] )
// grunt.registerTask('hbs', ['handlebarsLayouts'])
grunt.registerTask('default', ['handlebarslayouts']);
grunt.registerTask('trucho', ['handlebars']);


}