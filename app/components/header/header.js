import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd'
const { Header } = Layout
import './header.scss'

const PrimaryHeader = () => (
  <Header className='header'>
    <Menu theme='dark' mode='horizontal'
      defaultSelectedKeys={['2']}
      style={{lineHeight: '64px'}}>
      <Menu.Item key='app'>
        <NavLink to='/app' exact activeClassName='active'>首页</NavLink>
      </Menu.Item>
      <Menu.Item key='app-users'>
        <NavLink to='/app/users' activeClassName='active'>用户管理</NavLink>
      </Menu.Item>
      <Menu.Item key='app-products'>
        <NavLink to='/app/products' activeClassName='active'>D3组件</NavLink>
      </Menu.Item>
      <Menu.Item key='app-list'>
        <NavLink to='/app/list' activeClassName='active'>Websocket测试</NavLink>
      </Menu.Item>
    </Menu>
  </Header>
)

export default PrimaryHeader
