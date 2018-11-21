/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 登录退出的action
 * @Date: 2018-02-09 13:39:03 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-02-11 16:22:12
  */
import createAction from '@/util/createAction'
// ------------------------------------
// 常量
// ------------------------------------
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const LOGIN_OUT = 'LOGIN_OUT'
// ------------------------------------
// Actions
// ------------------------------------
export const loginRequest = createAction(LOGIN_REQUEST, 'username', 'page')
export const loginSuccess = createAction('LOGIN_SUCCESS', 'user', 'logged')
export const loginFailed = createAction(LOGIN_FAILED, 'error')
export const logout = createAction(LOGIN_OUT)
