import React from 'react'
import AppContainer from '../appHomeContainer'
import { shallow } from 'enzyme'

const setup = () => shallow(<AppContainer />)

describe('测试home容器组件', () => {
  it('组件是否渲染成功', () => {
    const wrapper = setup()
    expect(wrapper.find('.logout').length).toBe(1)
  })

  it('logout方法是否调用', () => {
    const wrapper = setup()
    const spyFunction = jest.spyOn(wrapper.instance(), 'logout')
    wrapper.instance().logout()
    expect(spyFunction).toHaveBeenCalled()
    spyFunction.mockRestore()
  })
})