module.exports = {
    entry: "./src/components/component.root.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build/"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    externals: {

    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}