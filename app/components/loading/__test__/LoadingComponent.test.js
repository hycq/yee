import React from 'react'
import LoadingComponent from '../LoadingComponent'
import { shallow } from 'enzyme'

/**
 * shallow方法实现浅渲染，作用是仅仅渲染至虚拟节点，不会返回真实的节点
 * @param {object} props 
 */
const setup = (props) => shallow(<LoadingComponent {...props} />) 

describe('测试不同props下LoadingComponent的渲染情况', () => {
    it('加载错误', () => {
        const props = {
            error: true
        }

        const wrapper = setup(props)
        expect(wrapper.getElement()).toEqual(<div>Error!</div>)
    })

    it('正在加载中', () => {
        const props = {
            pastDelay: true
        }
        const wrapper = setup(props)
        expect(wrapper.find('div').text()).toEqual('Loading...')
        expect(wrapper.find('div')).toHaveLength(1)
    })

    test('参数传入不正确，渲染null', () => {
        const props = {
            time: false
        }
        const wrapper = setup(props)
        expect(wrapper.getElement()).toBeNull()
    })
})