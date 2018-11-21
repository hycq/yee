export default {
  url: '/home/dept/:id?userName&age',
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