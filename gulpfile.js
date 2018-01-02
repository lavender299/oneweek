var gulp=require('gulp');
var webserver=require('web-server')

gulp.task('webserver',function(){
	gulp.src('.');
	.pipe(webserver,{
		host:8080,
		port:'localhost',
		middleware:function(req,res,next){
			res.setHeader('Access-Control-Allow-Origin','*');
			res.setHeader('Content-Type','Data/data.json;charset=utf-8')
		}
		if(req.method === 'GET'){
            res.end(JSON.stringify(data))
            console.log(111)
          }
      
	})
})

//压缩css
gulp.task('css',function(){
   gulp.src('./css/*.css')
       .pipe(css())
       .pipe(gulp.dest('./css'))
})	
//压缩js
gulp.task('js',function(){
   gulp.src('./js/*.js')
       .pipe(js())
       .pipe(gulp.dest(./js))
})
