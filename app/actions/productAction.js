/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 产品Action
 * @Date: 2018-03-12 11:43:42 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-09-02 14:24:21
  */

 import createAction from '@/util/createAction'
 // ------------------------------------
 // 常量
 // ------------------------------------
 export const LOAD_PRODUCT_REQUEST = 'LOAD_PRODUCT_REQUEST'
 export const LOAD_PRODUCT_SUCCESS = 'LOAD_PRODUCT_SUCCESS'
 // ------------------------------------
 // Actions
 // ------------------------------------
 export const loadProductRequest = createAction(LOAD_PRODUCT_REQUEST)
 export const loadProductSuccess = createAction(LOAD_PRODUCT_SUCCESS, 'response')
 export const loadProductFailed = createAction('LOAD_PRODUCT_FAILED', 'error')
 