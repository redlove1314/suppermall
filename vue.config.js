module.export = {
    configureWebpack: {
        resolve: {
            //配置不需要写入后缀名的文件
            extensions: []
        },
        alias: {
            // '@': 'src',
            // 'assets': 'src/assets',
            // 'common': 'src/common',
            // 'components': 'src/components',
            // 'network': 'src/network',
            // 'views': '@/views'
        }
    }
}