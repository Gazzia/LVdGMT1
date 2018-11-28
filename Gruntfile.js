module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      js_concating: {
        files: ['source/js/*.js'],
        tasks: ['concat:js'],
      },
      js_compile: {
        files: ['processed/js/scripts.js'],
        tasks: ['uglify:js'],
      },
      loadjs_concating: {
        files: ['source/js/load/*.js'],
        tasks: ['concat:loadjs'],
      },
      loadjs_compile: {
        files: ['processed/js/load.js'],
        tasks: ['uglify:loadjs'],
      },
      pug: {
        files: ['source/*.pug'],
        tasks: ['pug'],
      },
      html_includes: {
        files: ['processed/html/PugToHtml/*.html'],
        tasks: ['includes'],
      },
      // htmlmin: {
      //   files: ['processed/html/IncludeHTML/index.html'],
      //   tasks: ['htmlmin'],
      // },
      beep: {
        files: ['build/**/*.js','build/**/*.html'],
        tasks: ['beep:2'],
      },
    },

    concat: {
      js: {
        src: ['source/js/init.js', 'source/js/*.js'],
        dest: 'processed/js/scripts.js',
      },
      loadjs: {
        src: ['source/js/load/*.js'],
        dest: 'processed/js/load.js',
      },
    },

    uglify: {
      js: {
        options: {
          sourceMap: true,
        },
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['scripts.js'],
          dest: 'build/js',
          ext: '.js'
        }],
      },
      loadjs: {
        options: {
          sourceMap: true,
        },
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['load.js'],
          dest: 'build/js',
          ext: '.js'
        }],
      },
    },

    pug: {
      default: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['*.pug'],
          dest: 'processed/html/PugToHtml',
          ext: '.html'
        }],
        options: {
          pretty: true,
        }
      },
    },
    includes: {
      files: {
        cwd: 'processed/html/PugToHtml',
        src: ['index.html'],
        dest: 'build',
        flatten: true,
        options: {
          silent: true,
        }
      }
    },
    htmlmin: {
      default: {
        files: [{
          expand: true,
          cwd: 'processed/html/IncludeHTML',
          src: ['*.html'],
          dest: 'build',
          ext: '.html'
        }],
        options: {
          collapseWhitespace: true,
          removeComments: true,
        },
      },
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-beep');
};