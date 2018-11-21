import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Carousel, Upload, Icon, message } from 'antd'
import _ from 'lodash'
import XLSX from 'xlsx'
import ReactDataGrid from 'react-data-grid'
import reduxSagaInjector from '@/util/reduxSagaInjector'
import { arrayToObject } from '@/util/common'
import './index.scss'
const Dragger = Upload.Dragger

const mapStateToProps = (store) => {
  return store
}

@connect(mapStateToProps)
class AppHomeContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rows: [],
      columns: []
    }
    this.ref = null
  }

  logout() {
    const { dispatch } = this.props
    reduxSagaInjector(dispatch, 'LOGOUT')('fetchLogout', null, (result) => {
      const data = result.data
      if(data.code == 1){
        message.success(data.msg)
      }else{
        message.error(data.msg)
      }
    })
  }

  /**
   * @description Upload文件上传组件，当选择上传的文件后触发该方法
   * @param info 文件信息
   * @memberof AppHomeContainer
   */
  onChange(info) {
    const status = info.file.status
    const file = info.file.originFileObj
    if(status === 'done') {
      const reader = new FileReader()
      const rABS = !!reader.readAsBinaryString
      reader.onload = (e) => {
        const bstr = e.target.result
        const wb = XLSX.read(bstr, {
          type: rABS ? 'binary' : 'array'
        })
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        // 将读取的Excel内容转换成数组
        const data = XLSX.utils.sheet_to_json(ws, { header: 1})
        
        let title = data[0]
        let columns = []
        // 生成表格头部
        for(let i = 0, len = title.length; i < len; i++) {
          columns.push({
            key: title[i],
            name: title[i],
            editable: true
          })
        }

        this.setState({
          columns: columns,
          rows: arrayToObject(data)
        })
      }
      if(rABS) {
        reader.readAsBinaryString(file)
      } else {
        reader.readAsArrayBuffer(file)
      }
    }
  }
  /**
   * @description 获取每一行的数据
   * @param i 每行的索引
   * @memberof AppHomeContainer
   */
  rowGetter(i) {
    return this.state.rows[i]
  }

  /**
   * @description 修改每个单元格内容后自动刷新单元格内容
   * @param formRow 开始编辑的行数
   * @param toRow 编辑结束的行数
   * @param updated 修改后的值
   * @memberof AppHomeContainer
   */
  handleGridRowsUpdated({ fromRow, toRow, updated }) {
    let rows = this.state.rows.slice()
    for(let i = fromRow; i <= toRow; i++) {
      let rowToUpdate = rows[i]
      let updateRow = Object.assign({}, rowToUpdate, updated)
      rows[i] = updateRow
    }
    this.setState({ rows })
  }

  render() {
    return (
      <div>
        <Carousel autoplay>
          <div><h3>Page 1</h3></div>
          <div><h3>Page 2</h3></div>
          <div><h3>Page 3</h3></div>
          <div><h3>Page 4</h3></div>
          <div><h3>Page 5</h3></div>
        </Carousel>
        <Dragger onChange={this.onChange}>
          <p className='ant-upload-drag-icon'>
            <Icon type='inbox' />
          </p>
          <p className="ant-upload-text">点击或拖动上传文件</p>
          <p className="ant-upload-hint">支持Excel、CSV等文件格式</p>
        </Dragger>
        {
          this.state.columns.length > 0 ?
          <ReactDataGrid
            enableCellSelect={true}
            columns={this.state.columns}
            rowGetter={this.rowGetter}
            rowsCount={this.state.rows.length}
            onGridRowsUpdated={this.handleGridRowsUpdated}
           />
           :
           ''
        }
        <Button className='logout' type='danger' onClick={ this.logout }>Logout</Button>
      </div>
    )
  }
}

export default AppHomeContainer
