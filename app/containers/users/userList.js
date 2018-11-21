import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Button } from 'antd'
import _ from 'lodash'
import reduxSagaInjector from '@/util/reduxSagaInjector'
import { fetch } from '@/util/request'

const columns = [
  {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id'
  },{
    title: '详情',
    dataIndex: 'detail',
    key: 'detail'
  }
]

// const mapStateToProps = (store) => {
//   const { userList } = store
//   if(!userList) return {}
//   return {
//     userList: userList.userList
//   }
// }

// @connect(mapStateToProps)

function UserList() {
  const [ userList, setUserList ] = useState([])
  function handlerUserList(data) {
    debugger
    setUserList(data.data.result.userList) 
  }
  useEffect(() => {
    debugger
    // const {dispatch} = this.props
    // reduxSagaInjector(dispatch, 'USER_LIST')('fetchUserList', {list: 3}, 'userList', handlerUserList)
    fetch('fetchUserList').then(handlerUserList)
  }, [])
  debugger
  // let { userList } = this.props
  if(_.isEmpty(userList)) return null
  let list = userList.map((item, index) => {
    return {
      ...item,
      key: index
    }
  })
  return (
    <div>
      <Button type="primary">带可选参数请求</Button>
      <Table columns={columns} dataSource={list}/>
    </div>
  )
}
// class UserList1 extends Component{
//   constructor(props){
//     super(props)
//   }
//   componentDidMount(){
//     const {dispatch} = this.props
//     reduxSagaInjector(dispatch, 'USER_LIST')('fetchUserList', {list: 3}, 'userList')
//   }
//   reload = () => {
//     reduxSagaInjector(this.props.dispatch, 'USER_OPTION')('fetchUserOption', {id: 3, userName: 'dc'}, 'userList')
//   }
//   render(){
//     let { userList } = this.props
//     if(_.isEmpty(userList)) return null
//     userList = userList.map((item, index) => {
//       return {
//         ...item,
//         key: index
//       }
//     })
//     return (
//       <div>
//         <Button type="primary" onClick={this.reload}>带可选参数请求</Button>
//         <Table columns={columns} dataSource={userList}/>
//       </div>
//     )
//   }
// }

export default UserList