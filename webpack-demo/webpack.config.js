var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:{
		main:__dirname+'/src/script/main.js',
		a:__dirname+'/src/script/a.js',
		b:__dirname+'/src/script/b.js',
		c:__dirname+'/src/script/c.js'	
	},
	output:{
		path:__dirname+'/dist',
		filename:'js/[name]-[chunkhash].js',
		publicPath:'http://cdn.com/'
	},
	plugins:[
		new htmlWebpackPlugin({
			filename:'a.html',
			template:'index.html',
			inject:false,
			title:"this is a.html",
			// chunks:['a','main'],
			excludeChunks:['b','c']
		}),
		new htmlWebpackPlugin({
			filename:'b.html',
			template:'index.html',
			inject:false,
			title:"this is b.html",
			// chunks:['b'],
			excludeChunks:['a','c']
		}),
		new htmlWebpackPlugin({
			filename:'c.html',
			template:'index.html',
			inject:false,
			title:"this is c.html",
			// chunks:['c']
			excludeChunks:['a','b']
		})
	]
}	