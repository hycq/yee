import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table, Button, message } from 'antd'
import _ from 'lodash'
import { loadUserRequest } from '@/actions/userAction'
const { Column } = Table
import reduxSagaInjector from '@/util/reduxSagaInjector'


// 引入样式文件
import './list.scss'

/**
 * @description 筛选state
 * @param {object} loggedUser 从reducer中筛选的对象
 * @return {object} state对象
 */
const mapStateToProps = ({ userList }) => {
  if(!userList) return {}
  return {
    userList: userList.userList,
    ws: userList.ws
  }
}


/**
 * @description 展示从github加载用户的组件
 * @export {listContainer}
 * @class listContainer
 * @extends {Component}
 */
@connect(mapStateToProps)
export default class listContainer extends Component {

  componentDidMount(){
    const {dispatch} = this.props
    reduxSagaInjector(dispatch, 'USER_LIST')('fetchUserList', {list: 3}, 'userList', true)
  }

  /**
   * @description 点击按钮，获取github对应的用户
   * @memberof listContainer
   */
  handleUser = () => {
    this.props.dispatch(loadUserRequest('baizn', 1))
  }

  /**
   * 关闭socket
   * @return {void}
   */
  closeSocket = () => {
    const { ws } = this.props
    if(_.isEmpty(ws)) return
    ws.close()
    message.success('成功关闭socket');
  }
  /**
   * @description 渲染用户信息组件
   * @returns  {document} jsx片段，用户信息
   * @memberof listContainer
   */
  render() {
    let { userList } = this.props
    if(_.isEmpty(userList)) return null
    userList = userList.map((item, index) => {
      return {
        ...item,
        key: index
      }
    })
    return (
      <div className="list-layout">
        <Button
          type='primary'
          onClick={this.handleUser}
        >
          重载
        </Button>
        <Button
          type='primary'
          onClick={this.closeSocket}
          style={{ marginLeft: '20px'}}
        >
          关闭socket
        </Button>
        <Table dataSource={userList}>
          <Column title='ID' dataIndex='id' key='id' />
          <Column title='详情' dataIndex='detail' key='detail' />
        </Table>
      </div>
    )
  }
}
