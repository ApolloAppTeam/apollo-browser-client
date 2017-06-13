var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.resolve(`${__dirname}/src/js`),
	entry: "./app.js",
	output: {
		path: path.resolve(`${__dirname}/build`),
		filename: "bundle.js",
		publicPath: "/"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["env", "stage-0", "react"],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
				}
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!postcss-loader'
			},
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!postcss-loader!sass-loader'
			},
            {
                test: /\.(png|jpe?g|gif)$/,
                exclude: /node_modules/,
                loader: 'url-loader?name=/img/[name].[ext]'
            }
		]
	},
}
