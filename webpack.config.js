const path = require('path');

module.exports = {
    entry: './src/index.js', // Входной файл вашего приложения
    output: {
        path: path.resolve(__dirname, 'dist'), // Папка для собранного приложения
        filename: 'bundle.js' // Имя собранного файла
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Применять правила только к .js и .jsx файлам
                exclude: /node_modules/, // Исключить папку node_modules
                use: {
                    loader: 'babel-loader', // Использовать babel-loader для транспиляции JavaScript
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'] // Подключаем пресеты для Babel
                    }
                }
            },
            {
                test: /\.css$/, // Применять правила только к .css файлам
                use: ['style-loader', 'css-loader'] // Использовать стили из css-loader и добавить их в DOM с помощью style-loader
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]', // сохранять оригинальные имена файлов
                            outputPath: 'images', // папка для сохранения изображений
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    }
};
