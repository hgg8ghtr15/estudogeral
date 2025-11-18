const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Aponta para o arquivo específico que servirá como ponto de entrada
    entry: path.resolve(__dirname, "src", "js", "index.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    devServer:{
       static: {
        directory: path.join(__dirname, "dist", "index.html"),
       },
       port:3000,
       open:true,
    },
    plugins: [ 
        // Instancia o plugin para gerar o arquivo HTML
        new HTMLWebpackPlugin()
    ],
    module:{
        rules:[{
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
            exclude: "/node_modules/",
        },{
           test: /\.js$/i, 
           exclude: "/node_modules/",
           use:{
            loader: "babel-loader",
            options:{
                presets: [['@babel/preset-env', {targets: "defaults"}]],
            },
           },
        }]
    }
};