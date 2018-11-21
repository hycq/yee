/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 处理登录登出的saga文件
 * @Date: 2018-02-09 13:36:27 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-07-23 21:43:01
  */
import { take, call, put, fork, cancel } from 'redux-saga/effects'
import { 
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_OUT,
  loginSuccess,
  loginFailed } from '@/actions/loginAction'
import { push } from 'react-router-redux'

function authorizeApi(user, password) {
  return 'xxxx'
}

function strokeItem(token) {
  localStorage.setItem('token', token)
}

function clearItem(name) {
  localStorage.removeItem(name)
}

/**
 * @description 登录验证
 * @param {string} user 用户名
 * @param {string} password 密码
 * @returns {string} 登录用户唯一标识
 */
function* authorize(user, password) {
  try {
    const token = yield call(authorizeApi, user, password)
    yield put(loginSuccess(token, true))
    yield put(push('/app'))
    return token
  } catch (error) {
    yield put(loginFailed(error))
  }
}

/**
 * @description 处理登录流程
 * @export generator
 */
export function* loginFlow() {
  while(true) {
    const { user, password } = yield take(LOGIN_REQUEST)
    const task = yield fork(authorize, user, password)
    const action = yield take([LOGIN_OUT, LOGIN_FAILED])
    if(action.type === LOGIN_OUT) {
      yield cancel(task)
      yield put(push('/'))
    }

    yield call(clearItem, 'token')
  }
}
