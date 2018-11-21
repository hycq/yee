/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 饼图Mock数据
 * @Date: 2018-03-12 11:39:21 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-09-02 14:52:57
  */

export default {
  url: '/pie',
  /* 
   *  当base.config.js里host为数组的时候，hostIndex表示取第几个作为后端服务器地址，
   *  不配置的话，默认取第1个。如果host还是为字符串，则不需要配置；websocketHost同样适用
   */ 
  hostIndex: 0,
  mock: {
    'code': 1,
    'msg': 'success',
    'result|2-5': [
      {
        'name|+1': ['苹果', 'OPPO', '三星', '华为', '小米'],
        'value|10-100': 1,
        'child|2-5': [
          {
            'name': '@cname',
            'value|10-100': 1
          }
        ]
      }
    ]
  }
}