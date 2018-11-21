/*
 * @Author: baizn
 * @Date: 2018-10-19 13:39:55
 * @LastEditors: baizn
 * @LastEditTime: 2018-10-19 13:50:43
 * @Description: 所有测试用例执行之前，配置Enzyme 适配器
 */
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16.2'

Enzyme.configure({
    adapter: new Adapter()
})
