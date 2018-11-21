/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 生成单一reducers的方法
 * @Date: 2018-03-30 14:07:03 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-07-24 10:27:00
  */

/**
 * 根据传入的action类型生成reducers
 * @param {string} type action类型
 */
export default (type) => {
  return (state = {}, action) => {
    if(type === action.type) {
      return Object.assign({}, state, {
        ...action.response
      })
    }
    return state
  }
}
