/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 通用的工具类方法
 * @Date: 2018-07-26 08:59:46 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-07-26 09:01:10
  */

/**
   * 矩阵转换
   * @param {Array} arr 矩阵数组
   * @returns {Array} 对象数组
   * @author 谢洋
   */
export function arrayToObject(arr) {
  if(!arr) {
    return []
  }
  const result = []
  let key = []

  arr.forEach((value, index) => {
    if(!index) {
      key = value
    } else {
      const temp = {}

      value.forEach((v, i) => {
        temp[key[i]] = v
      })
      result.push(temp)
    }
  })

  return result
}
