module.exports = function(grunt) {
  require('google-closure-compiler').grunt(grunt);
  grunt.initConfig({
    watch: {
      scss: {
        files: ['source/sass/**/*.scss'],
        tasks: ['sass'],
      },
      js_concating: {
        files: ['source/js/*.js'],
        tasks: ['concat:js'],
      },
      loadjs_concating: {
        files: ['source/js/load/*.js'],
        tasks: ['concat:loadjs'],
      },
      pug: {
        files: ['source/*.pug'],
        tasks: ['pug'],
      },
      html_includes: {
        files: ['processed/html/PugToHtml/*.html'],
        tasks: ['includes'],
      },
      htmlmin: {
        files: ['processed/html/IncludeHTML/index.html'],
        tasks: ['htmlmin'],
      },
      beep: {
        files: ['build/**/*'],
        tasks: ['beep:2'],
      },
      css_prefix: {
        files: ['processed/css/styles.min.css'],
        tasks: ['autoprefixer'],
      },
      js_compile: {
        files: ['processed/js/scripts.js'],
        tasks: ['uglify:js'],
      },
      loadjs_compile: {
        files: ['processed/js/load.js'],
        tasks: ['uglify:loadjs'],
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

    'closure-compiler': {
      js: {
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['scripts.js'],
          dest: 'build/js',
          ext: '.js'
        }],
        options: {
          compilation_level: 'SIMPLE',
        },
      },
      loadjs: {
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['load.js'],
          dest: 'build/js',
          ext: '.js'
        }],
        options: {
          compilation_level: 'SIMPLE',
        },
      },
    },

    sass: {
      build: { // Target
        options: { // Target options
          style: 'compressed'
        },
        files: [{
          expand: true,
          cwd: 'source/sass',
          src: ['*.scss'],
          dest: 'processed/css',
          ext: '.min.css'
        }],
      },
    },

    autoprefixer: {
      css: {
        src: 'processed/css/styles.min.css',
        dest: 'build/css/styles.css',
      },
    },
    pug:{
      default: {
        files: [{
          expand: true,
          cwd: 'source',
          src: ['*.pug'],
          dest: 'processed/html/PugToHtml',
          ext: '.html'
        }],
        options:{
          pretty:true,
        }
      },
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
    uglify: {
      js: {
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['scripts.js'],
          dest: 'build/js',
          ext: '.js'
        }],
      },
      loadjs: {
        files: [{
          expand: true,
          cwd: 'processed/js',
          src: ['load.js'],
          dest: 'build/js',
          ext: '.js'
        }],
      },
    },

    includes: {
      files: {
        cwd: 'processed/html/PugToHtml',
        src: ['index.html'], // Source files
        dest: 'processed/html/IncludeHTML', // Destination directory
        flatten: true,
        options: {
          silent: true,
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-uglify-es');
  grunt.loadNpmTasks('grunt-contrib-pug');
  grunt.loadNpmTasks('grunt-beep');
};
