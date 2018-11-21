/*
 * @Author: baizn 
 * @Email: baizhanning@hiynn.com 
 * @Description: 渲染D3绘制的图表组件
 * @Date: 2018-03-07 14:56:52 
 * @Last Modified by: ouyangdecai
 * @Last Modified time: 2018-09-03 21:32:04
  */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'
import { loadProductRequest } from '@/actions/productAction'
// 引入D3组件高阶组件
import D3ChartFactory from '@/util/d3ChartFactory'
// 引入需要渲染的D3图表组件
import { Pie } from '@/charts'
import './index.scss'

// 将需要渲染的D3组件作为参数传递给D3ChartFactory高阶组件
const D3ChartComponent = D3ChartFactory(Pie)

const mapStateToProps = ({product}) => {
  return {
    result: product.result
  }
}

@connect(mapStateToProps)
class ProductSubLayout extends Component {
  constructor () {
    super()
  }

  componentDidMount() {
    this.props.dispatch(loadProductRequest())
  }

  changeData = () => {
    this.props.dispatch(loadProductRequest())
  }
  
  render() {
    const { result } = this.props
    if(!result) {
      return null
    }

    return (
      <div className="product-sub-layout">
        <Button type='primary' onClick={this.changeData}>更新数据</Button>
        <D3ChartComponent data={this.props.result} />
      </div>
    )
  }
}
export default ProductSubLayout
