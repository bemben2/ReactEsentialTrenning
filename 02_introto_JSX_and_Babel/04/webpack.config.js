var webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "react"]
				}
			},
			// {
			// 	test: /\.json$/,
			// 	exclude: /(node_modules)/,
			// 	loader: "json-loader"
			// },
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader!autoprefixer-loader'
			// },
			// {
			// 	test: /\.scss$/,
			// 	loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			// }
		]
	}
}







