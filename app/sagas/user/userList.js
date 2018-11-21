/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 获取用户列表mock数据
 * @Date: 2018-02-12 11:11:18 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-08-09 09:06:20
  */

export default {
  url: '/user/:list',
  // 默认值为false，可省略
  isWebsocket: false,
  /* 
   *  当base.config.js里host为数组的时候，hostIndex表示取第几个作为后端服务器地址，
   *  不配置的话，默认取第1个。如果host还是为字符串，则不需要配置；websocketHost同样适用
   */ 
  hostIndex: 0,
  mock: {
    'code': 1,
    'msg': 'success',
    'result': {
      'userList|10-15': [
        {
          'id|5-10': 100,
          'detail|30-5': '@cname'
        }
      ]
    }
  }
}
