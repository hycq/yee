/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 应用程序容器组件主文件
 * @Date: 2018-03-07 14:41:58 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-09-03 21:17:11
  */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import Loadable from 'react-loadable'
import AuthorizedRoute from './authorizedRoute'
import LoadingComponent from '@/components/loading/LoadingComponent'

// Containers
import LoginContainer from './login/loginContainer'

// 按需加载
const LoadablePrimary = Loadable({
  loader: () => import('./primaryContainer'),
  loading: LoadingComponent,
  delay: 200,
  timeout: 10000
})

class AppContainer extends Component {
  static propTypes = {
    store: PropTypes.shape({
      asyncReducers: PropTypes.object,
      asyncSagas: PropTypes.object,
      dispatch: PropTypes.func,
      getState: PropTypes.func,
      subscribe: PropTypes.func
    }).isRequired
  }

  /**
   * @description 渲染应用主render方法
   * @returns {document} 页面主框架
   * @memberof AppContainer
   */
  render() {
    const { store } = this.props

    return (
      <Provider store={store}>
        <ConnectedRouter history={store.history}>
          <Switch>
            <Route path='/auth/login' component={LoginContainer} />
            <AuthorizedRoute path='/app' component={LoadablePrimary} />
            <Redirect to='/app' />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default AppContainer
