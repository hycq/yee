/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 项目默认全局配置项
 * @Date: 2018-02-12 10:41:52 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-08-09 09:18:09
  */

export default {
  // 是否使用mock模式，在mock模式下向服务器的请求被mockjs拦截
  mock: true, // search.indexOf('mock') !== -1,
  // 是否使用proxy模式，在proxy模式下会使用proxy的url来替换原来的url
  proxy: false, // search.indexOf('proxy') !== -1,
  // 模拟websocket时，消息的推送间隔(毫秒)
  mockInterval: 3500,
  // 轮询请求时的时间间隔(毫秒)
  fetchInterval: 3000,
  // 主要用于前后台联调，代理服务器域名，当proxy为true时，所有ajax请求都会发送到这个域名
  proxyHost: 'http://192.168.1.199:3000/api',
  // 主要用于前后台联调，websocket代理服务器域名，当proxy为true时，所有websocket都会连接到这个域名
  websocketProxyHost: 'ws://offline.com',
  // 线上服务器域名，当访问URL时不加mock或proxy时，所有ajax请求都会发送到这个域名
  host: ['http://192.168.1.199:3000/api'],
  // websocket线上服务器域名，当访问URL时不加mock或proxy时，所有websocket都会连接到这个域名
  websocketHost: ['ws://online.com'],
  // 地图路径
  mapHost: 'http://192.168.1.16:10088/mapdata/cq',
  // 是否使用zoom模式，在zoom模式下页面会根据窗口的宽高使用transform调整
  zoom: false,
  // 固定的页面宽
  pageWidth: 1920,
  // 固定的页面高
  pageHeight: 1080
}
