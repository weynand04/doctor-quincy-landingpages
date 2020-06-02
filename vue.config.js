 module.exports = {
   publicPath: process.env.NODE_ENV === 'production' ?
     '//' : '/'
 }

 // module.exports = {
 //   devServer: {
 //     disableHostCheck: true,
 //   },
 //   transpileDependencies: ['vuetify'],
 // }
