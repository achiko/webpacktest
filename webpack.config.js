var debug = process.env.NODE_ENV !== "production";
var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: debug  ? "inline-sourcemap" : null,
	entry: "./js/scripts.js",
	output: {
		path: __dirname + "/js",
		filename: "scripts.min.js"
	},
	plugin: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),		
		new  webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false  })
	]

}