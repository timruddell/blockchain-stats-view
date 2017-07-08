module.exports = {
    entry: "./src/components/component.root.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/build/"
    },
    module: {
        loaders: [
            {
                // Tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: "jsx-loader?insertPragma=React.DOM&harmony"
            }
        ]
    },
    externals: {

    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
}