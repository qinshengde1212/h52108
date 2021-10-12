const gulp =require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const rename = require('gulp-rename')
console.log(gulp);
function es625(done){
    console.log('es625')
    // 输入：查找目标文件（返回文件流：文件的液体状态，可以随意分割和传输）
    gulp.src('./js/common.js')

    // 处理
    .pipe(babel({
        presets: ["@babel/preset-env"],
    }))

    // 输出：把处理过的文件保存到硬盘
    .pipe(gulp.dest('./dist'))

    done();
}

function compileJs(done){
    gulp.src('../src/**/*.js')
    .pipe(babel({
        presets: ["@babel/preset-env"],
    }))
    .pipe(concat('all.js'))

    .pipe(gulp.dest('./dist/js'))
    .pipe(uglify())
    .pipe(rename({
        // dirname: "main/text/ciao",
        // basename: "aloha",
        // prefix: "bonjour-",
        suffix: ".min"
        // extname: ".md"
    }))
    .pipe(gulp.dest('./dist/js'))
    done();
}
exports.es625 = es625;
exports.compileJs = compileJs;