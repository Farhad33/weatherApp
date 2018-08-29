const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const PUB_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = (env, argv) => {
	const devMode = argv.mode !== 'production'

	return {
		entry: SRC_DIR + '/index.js',
		output: {
			path: PUB_DIR,
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: SRC_DIR,
					loader: 'babel-loader',
					query: {
						presets: ["env", "react", "stage-2"]
					}
				},
				{
					test: /\.(sa|sc|c)ss$/,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'sass-loader'
					],
				},
				{
					test: /\.svg$/,
					loader: 'svg-sprite-loader',
				}
			]
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: devMode ? '[name].css' : '[name].[hash].css',
				chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
			}),
			new HtmlWebpackPlugin({
				inject: true,
				template: SRC_DIR + '/index.html',
				minify: {
					removeComments: true,
					collapseWhitespace: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeStyleLinkTypeAttributes: true,
					keepClosingSlash: true,
					minifyJS: true,
					minifyCSS: true,
					minifyURLs: true
				}
			})
		]
	}
};
