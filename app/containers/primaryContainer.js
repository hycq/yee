/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 主布局页面
 * @Date: 2018-03-07 14:58:35 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-07-21 12:04:54
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd'
const { Content, Footer } = Layout

import PrimaryHeader from '@/components/header/header'
import AppHomeContainer from './home/appHomeContainer'
import LoadingComponent from '@/components/loading/LoadingComponent'

// Sub Container
import ProductSubContainer from './product/productSubContainer'
import LeftSider from '@/components/sider/leftSider'

import Loadable from 'react-loadable'
// import LoadableUserSubContainer from './users/userSubContainer'
// import LoadableListContainer from './users/userSubContainer'


// // 按需加载组件
const LoadableUserSubContainer = Loadable({
  loader: () => import('./users/userSubContainer'),
  loading: LoadingComponent
})

const LoadableListContainer = Loadable({
  loader: () => import('./list/list'),
  loading: LoadingComponent
})

@connect(null)
export default class PrimaryHeaderContainer extends Component {
  render() {
    const { match } = this.props
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LeftSider />
        <Layout>
          <PrimaryHeader/>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>一级导航</Breadcrumb.Item>
              <Breadcrumb.Item>二级导航</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              <Switch>
                <Route path={`${match.path}`} exact component={AppHomeContainer} />
                <Route path={`${match.path}/users`} component={LoadableUserSubContainer} />
                <Route path={`${match.path}/products`} component={ProductSubContainer} />
                <Route path={`${match.path}/list`} component={LoadableListContainer} />
                <Redirect to={`${match.url}`} />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            技术支持-海云数据研发中心
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
