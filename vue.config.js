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
            .set('_p', resolve('packages'));
        config.module
            .rule('js')
            .include.add(/packages/)
            .end()
            .include.add(/examples/)
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                console.log(options)
                return options;
            });
    }
}
