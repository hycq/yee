import { call, put, takeLatest } from 'redux-saga/effects'
import { fetch } from '@/util/request'
import {
  LOAD_PRODUCT_REQUEST,
  loadProductSuccess,
  loadProductFailed
} from '@/actions/productAction'

const apifetchPie = () => {
  return fetch('fetchPie')
}

export function* fetchPie() {
  try {
    yield takeLatest(LOAD_PRODUCT_REQUEST, fetchPie)
    const productData = yield call(apifetchPie)
    yield put(loadProductSuccess(productData.data))
  } catch (error) {
    yield put(loadProductFailed(error.message))
  }
}