/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 通用侧边导航栏
 * @Date: 2018-03-13 10:01:18 
 * @Last Modified by: baizn
 * @Last Modified time: 2018-07-19 10:17:27
  */

import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
const { Sider } = Layout
const SubMenu = Menu.SubMenu
import './sider.scss'

export default class LeftSider extends Component {
  state = {
    collapsed: false
  }

  onCollapse = (collapsed) => {
    this.setState({ collapsed })
  }

  renderMenu = () => {
    const mockData = [
      {
        type: 'menu',
        icon: 'user',
        key: '1',
        value: '个人中心'
      },
      {
        type: 'menu',
        icon: 'pie-chart',
        key: '2',
        value: '待办事项'
      },
      {
        type: 'menu',
        icon: 'desktop',
        key: '3',
        value: '审批管理',
        children: [
          {
            type: 'sub-menu',
            icon: 'pie-chart',
            key: 'sub1',
            value: '已审批列表',
          },
          {
            type: 'sub-menu',
            icon: 'pie-chart',
            key: 'sub2',
            value: '我的申请列表',
          }
        ]
      }
    ]
    return mockData.map(data => {
      return data.children
      ?
      <SubMenu key={data.key}
        title={<span><Icon type={data.icon} /><span>{data.value}</span></span>}>
        {
          data.children.map(cdata => {
            return <Menu.Item key={cdata.key}>{cdata.value}</Menu.Item>
          })
        }
      </SubMenu>
      :
      <Menu.Item key={data.key}>
        <Icon type={data.icon} />
        <span>{data.value}</span>
      </Menu.Item>

    })
  }

  render() {
    return (
      <Sider collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}>
        <div className='silder-logo' />
          <Menu theme='dark' mode='inline'
            defaultSelectedKeys={['1']}>
            { this.renderMenu() }
          </Menu>
      </Sider>
    )
  }
}
