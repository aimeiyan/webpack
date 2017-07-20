var htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
	entry:{
		page1:__dirname+'/src/script/main.js',
		page2:__dirname+'/src/script/a.js'	
	},
	output:{
		path:__dirname+'/dist/js',
		filename:'[name]-[chunkhash].js'
	},
	plugins:[
		new htmlWebpackPlugin()
	]
}	