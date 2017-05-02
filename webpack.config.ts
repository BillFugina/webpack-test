import * as path from 'path'

const config = {
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./styles'),
            path.resolve('./node_modules')
        ],
        extensions: ['.ts', '.js', '.scss']
    },
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'

            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: 'source-map-loader'
            },
            {
                test: /\.scss$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: "dist",
        historyApiFallback: true,
        inline: true,
        open: true
    },
    devtool: 'inline-source-map'
}

module.exports = config