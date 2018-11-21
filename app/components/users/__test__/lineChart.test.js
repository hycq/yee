import React from 'react'
import LineChart from '../lineChart'
import { shallow, mount } from 'enzyme'

const setup = () => shallow(<LineChart />)

describe('测试图表组件', () => {
    it('是否成功渲染', () => {
        const wrapper = setup()
        expect(wrapper.find('canvas').length).toBe(1)
    })

    it('测试组件componentDidMount生命周期方法', () => {
        const componentSpy = jest.spyOn(LineChart.prototype, 'componentDidMount')
        const wrapper = setup()
        expect(componentSpy).toHaveBeenCalled()
        componentSpy.mockRestore()
    })
})