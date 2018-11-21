/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 登录测试页面
 * @Date: 2018-03-07 14:43:06 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-09-06 20:11:07
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Checkbox } from 'antd'
import { loginRequest } from '@/actions/loginAction'
import reduxSagaInjector from '@/util/reduxSagaInjector'
import './index.scss'

const mapStateToProps = (store) => {
  store.demo
  return {
  }
}

@connect(mapStateToProps)
class LoginContainer extends Component {
  /**
   * @description 点击登录按钮，触发action
   * @memberof LoginPage
   */
  login = () => {
    const { dispatch } = this.props
    dispatch(loginRequest())
    reduxSagaInjector(dispatch, 'LOGIN')('fetchLogin', {account: 'account', passwd: 'passwd'}, 'userInfo')
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login-form'>
          <div className='title'>
            <i className='logo'></i>
            <span>HYPageEditor</span>
          </div>
          <div className='form-input'>
            <input className='username' placeholder='用户名/邮箱' />
            <input className='password' placeholder='密码' />
          </div>
          <Button className='login-btn' type='primary' onClick={ this.login }>Login</Button>
          <div className='register'>
            还没有账号? <span>快速注册</span>
          </div>
          <div className='autologin'>
            <Checkbox>自动登录</Checkbox>
          </div>
          <div className='forgot-password'>忘记密码</div>
        </div>
      </div>
    )
  }
}

export default LoginContainer
