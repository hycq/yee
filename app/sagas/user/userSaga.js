/*
 * @Author: baizn
 * @Email: baizhanning@hiynn.com
 * @Description: 涉及到操作用户的saga
 * @Date: 2018-02-08 14:20:44
 * @Last Modified by: baizn
 * @Last Modified time: 2018-05-31 16:05:32
  */
import { call, put, take, takeLatest } from 'redux-saga/effects'
import { fetch } from '@/util/request'

import {
  LOAD_USER_REQUEST,
  loadUserSuccess, 
  loadUserFailed } from '@/actions/userAction'
  
/**
 * @description 使用github API获取用户信息
 * @param {string} username 用户名
 * @param {number} page 当前页数
 * @return {promise} 返回结果的Promise
 */
const apifetchUser = (username, page) => {
  return fetch('fetchUserList', {
    userName,
    page
  })
}
/**
 * @description 获取用户信息
 * @param {object} action action类型
 */
export function* fetchUser() {
  try {
    const action = yield takeLatest(LOAD_USER_REQUEST, fetchUser)
    const user = yield call(apifetchUser, action.username, action.page)
    console.log('mock user', user)
    yield put(loadUserSuccess(user.data))
  } catch (error) {
    yield put(loadUserFailed(error.message))
  }
}
