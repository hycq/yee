/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 环境配置，通过设置NODE_ENV的值区分不同的环境，development环境下参考
 * http://stackoverflow.com/questions/34133808/webpack-ots-parsing-error-loading-fonts/34133809#34133809
 * @Date: 2018-03-07 14:35:59 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-05-25 12:39:56
  */

 module.exports = {
  // ======================================================
  // Overrides when NODE_ENV === 'development'
  // ======================================================
  development: (config) => ({
    compiler_public_path: 
      config.server_host 
        ? `${config.server_host}:${config.server_port}${config.resource_deploy_path}/`
        : `${config.resource_deploy_path}/`
  }),

  // ======================================================
  // Overrides when NODE_ENV === 'production'
  // ======================================================
  production: (config) => ({
    compiler_public_path: 
      config.server_host 
        ? `${config.server_host}:${config.server_port}${config.resource_deploy_path}/`
        : `${config.resource_deploy_path}/`,
    compiler_fail_on_warning: false,
    compiler_hash_type: 'chunkhash',
    compiler_devtool: null,
    compiler_stats: {
      chunks: true,
      chunkModules: true,
      colors: true
    }
  })
}
