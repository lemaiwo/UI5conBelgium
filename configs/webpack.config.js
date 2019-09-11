const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const isDebug = process.env.NODE_ENV !== "production";
const PROJECT_ROOT = path.resolve(__dirname, '..');

const config = {
    entry: {
        core: path.resolve(PROJECT_ROOT, 'src/default.js'),
        styles: path.resolve(PROJECT_ROOT, 'src/blocks/index.css')
    },

    output: {
        path: path.resolve(PROJECT_ROOT, 'build'),
        publicPath: '',
        filename: '[name].js',
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                config: path.resolve(__dirname, 'postcss.config.js'),
                            },
                        },
                    ],
                }),
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
	                {
		                loader: 'url-loader',
		                options: {
			                limit: 10000
		                }
	                }
                ],
            },
        ],
    },

    plugins: [
        new ExtractTextPlugin('styles.css'),
        new CopyWebpackPlugin([
	        // copy resourced from data folder
        	{ from: path.resolve(PROJECT_ROOT, "src/data/"),
		        to: path.resolve(PROJECT_ROOT, "build/data/"),
	        }
        ],
	        {
		        ignore: [
			        // Doesn't copy any files with a json extension
			        '*.json'
		        ]
	        }),

        ...isDebug ? [] : [
            // Minimize all JavaScript output of chunks
            // https://github.com/mishoo/UglifyJS2#compressor-options
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                compress: {
                    screw_ie8: true,
                    warnings: false,
                    unused: true,
                    dead_code: true,
                },
                mangle: {
                    screw_ie8: true,
                },
                output: {
                    comments: false,
                    screw_ie8: true,
                },
            }),
        ],
    ],

    target: 'web',
};


module.exports = config;
