const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver}=require('unplugin-vue-components/resolver')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack:{
    plugins:[
      AutoImport({
        resolvers:[ElementPlusResolver()],
      }),
      Components({
        resolvers:[ElementPlusResolver()],
      }),
    ],
  }
})
