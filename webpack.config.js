module.exports = {
  entry:'./src/main.js',
  output: {
    path:'./dist',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase:'./dist',
    inline: true,
    proxy: {
      '/api' : {
        target: 'http://localhost:1337',
        secure: false
      }
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
