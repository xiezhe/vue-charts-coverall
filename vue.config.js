const path = require('path');
const resolve = dir => path.join(__dirname, dir);
module.exports = {
    configureWebpack: config=>{
        config.entry.app = './examples/main.js'
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_c', resolve('src/components'))
            .set('_s', resolve('static'))
            .set('_p', resolve('src/packages'))
    }
}
