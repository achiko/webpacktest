var debug = process.env.NODE_ENV !== "prduction";
var webpack = require("webpack");

module.exports = {
	context: __dirname,
	devtool: debug  ? "inline-sourcemap" : null,
	entry: "./js/script.js",
	output: {
		path: __dirname + "/js",
		filename: "scripts.min.js"
	},
	plugin: debug ? [] : [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyPlugin({ mangle: false, sourcemap: false  })
	]

}