const path = require('path')

// PLUGINS Y MINIFICADORES DE CSS Y SCSS/SASS
// Para reducir el tamano de las hojas de estilo de nuestro proyecto

const HtmlWebpackPlugin = require('html-webpack-plugin'); //Para el template del html que va a usar webpack
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Para reducir los css
const { SourceMapDevToolPlugin } = require('webpack'); // Conocer el source map de nuestro proyecto

//Configuraciones
const port = process.env.PORT || 3000;

//Exportar configuraciones de webpack
module.exports = {
    entry: './src/index.jsx',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/'
    },
    context: path.resolve(__dirname),
    devServer: {
        port,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            // * Reglas para archivos JS y JSX
            // ! Tienen que pasar el LINTING para poder pasar
            {
                enforce: 'pre',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: 'source-map-loader'
                
            },
            // * Reglas de Babel ES y JSX
            {
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:[
                            '@babel/env',
                            '@babel/react'
                        ]
                    }
                }
            },
            // * Reglas para archivos CSS, SCSS Y SASS para minificarlos y cargarlos en la solucion final
            {
                test: /(\.css|\.scss|\.sass)$/,
                use:[
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            // * Reglas para archivos de imagen
            {
                test: /\.(png|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        // * Template HTML
        new HtmlWebpackPlugin(
            {
                template: './public/index.html'
            }
        ),
        new MiniCssExtractPlugin(
            {
                filename: './css/styles.css'
            }
        ),
        new SourceMapDevToolPlugin(
            {
                filename: '[file].map'
            }
        )
    ],
    resolve: {
        extensions: ['.js', '.jsx', 'css', '.scss', '.sass'],
        modules: [
            'node_modules'
        ]
    }
}