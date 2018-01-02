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
//压缩html
gulp.task('html',function(){
   gulp.src('./index.html')
       .pipe(html({
            removeComments: true,//清除HTML注释
            collapseWhitespace:true,//压缩HTML
            removeScriptTypeAttributes:true,//删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes:true,//删除<style>和<link>的type="text/css"
            minifyJS: true,//压缩页面JS
            minifyCSS: true//压缩页面CSS
        })).pipe(gulp.dest('./HTML'))
})

//压缩css
gulp.task('css',function(){
   gulp.src('./css/*.css')
       .pipe(css())
       .pipe(gulp.dest('./css1'))
})	
//压缩js
gulp.task('js',function(){
   gulp.src('./js/*.js')
       .pipe(js())
       .pipe(gulp.dest('./js1'))
})
