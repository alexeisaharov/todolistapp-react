var path = require('path');

module.exports = {
    entry: "./src/index.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: '/public/',
        filename: "bundle.js"
    },
    module:{
        rules:[
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options:{
                    presets: ["env", "flow", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },
    devServer: {
        inline:true,
        port: 3000
    }
}