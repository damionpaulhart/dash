# DASH
 * !!! Update all paths in changelog.md !!!

1. NODE.JS: https://nodejs.org
    1. Install exe
2. Create a folder to hold the project
3. Command Prompt with Administrator rights:  navigate to project folder
4. GIT: https://github.com
    1. Create git project
        ```
        git init
        ```
5. NPM: is installed with NODE.JS
    1. Run "npm init". Creates package.json. Answer questions.
        ```
        npm init
        ```
        Added to package.json
        ```
            "repository": {
                "type": "git",
                "url": "git+https://github.com/damionpaulhart/dash.git"
              },
               "bugs": {
                 "url": "https://github.com/damionpaulhart/knewro/issues"
               },
               "homepage": "https://github.com/damionpaulhart/knewro#readme",
        ```
6. Upload to github
7. Create index.html with bootstrap dashboard example then edit
    1. Update css CDN
    ```
    https://getbootstrap.com/docs/4.0/examples/dashboard/
    ```
    2. Update bootstrap js CDN
    ``` 
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js"></script>
    ```
    3. Update jQuery CDN
    4. Update popper.js CDN
    ``` 
    https://unpkg.com/popper.js/dist/umd/popper.min.js
    ```
 8. Webpack
    1. Install
        ``` 
        npm install webpack webpack-cli --save-dev
        ```
    2. Create webpack.config.js in root folder
        ``` 
            const path = require('path');
            module.exports = {
                entry: './src/js/app.js',
                output: {
                    filename: 'main.js',
                    path: __dirname + '/app/js/'
                },
            }
        ```
     3. Install wepack-dev-server
        ``` 
        npm install --save-dev webpack-dev-server
        ```
     4. Update webpack.config.js
        ``` 
        devServer: { contentBase: path.join(__dirname, "/app/js"),  
                    compress: true,
                    port: 9000
                    },
        ```
     5. Update package.json
        ``` 
        "scripts": {
                        "test": "echo \"Error: no test specified\" && exit 1",
                        "watch": "webpack --watch --mode development ./src/js/index.js --output ./app/main.js",
                        "start": "webpack-dev-server --open --mode development ./src/js/index.js --output ./app/main.js",
                        "dev": "webpack --mode development ./src/js/index.js --output ./app/main.js",
                        "build": "webpack --mode production ./src/js/index.js --output ./app/main.js"
                      },
                      
                      
        ```
9. Babel with babel-loader
    1.
        ``` 
        npm install babel-core babel-loader babel-preset-env --save-dev
        ```
    2. Create .babelrc in root folder
        ``` 
        {
          "presets": ["env"]
        }
        ```
    2.  Add loader to webpack.config.js
        ``` 
        module: {
                rules: [
                    {
                        test: /\.jsx?$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                        },
                    },
                ],
            }
        ```