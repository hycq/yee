import d3 from 'd3'
import { originToDeformation } from '@/util/zoom/zoom'

/**
 * 随机生成svg defs中元素的ID
 * 
 * @return 随机生成的ID
 */
export const genSVGDocID = ( () => {
  let id = 1
  return () => {
    let prefix = new Date().valueOf()
    return `hyfe-${prefix}-${id++}`
  }
})()

/**
 *  颜色插值
 *  @example: ['#2c75e1', '#e953ff']
 *  @param    {array}  color 颜色值
 *  @return   {function}  颜色填充值
 */
export const interpolate = (color) => {
  return d3.interpolate(color[0], color[1])
}

/**
 * 没有数据时，显示暂无数据
 * @param {document} container 容器
 * @param {object} object 容器宽度和高度 
 * @return {null} null
 */
export const isNoData = (container, { width, height } ) => {
  container.html('')
  container.append('text')
    .html('暂无数据') 
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .attr('font-size', 22)
    .attr('fill', '#fff')
    .attr('text-anchor', 'middle')
}

/**
 *  计算不规则柱状图，形状填充个数的比例尺
 *  @param    {array}   data      图表数据
 *  @param    {number}  shapeMax  形状的最大个数
 *  @return   {function}  比例尺
 */
export const countScale = (data, shapeMax) => {
  return d3.scale.pow()  
    .domain([0, d3.max(data)])
    .range([0, shapeMax])
    .exponent(0.6)   
}

/**
 *  添加svg
 *  @param    {string}  selector       选择器
 *  @param    {number}  options.width  宽
 *  @param    {number}  options.height 高
 *  @return   {object}  svg容器
 */
export const appendSVG = (selector, {width, height}) => {
  let svg = d3.select(selector)
    .append('svg')
    .attr('width', width)
    .attr('height', height)
  return svg    
}

/**
 * 获取鼠标真实位置，缩放后鼠标位置可能会存在偏差，需要进行适当的转换
 *  @return   {array}  x,y坐标位置
 */
export const getMousePosition = () => {
  let pos = originToDeformation([d3.event.offsetX , d3.event.offsetY - 60])
  return{
    x: pos[0],
    y: pos[1]
  }
}

/**
 * 创建一段随机数
 * @param  {Number} len 随机数的长度
 * @return {String} 返回随机数
 */
export function randomString(len) {
  let s = ''
  let randomchar = function () {
    let n = Math.floor(Math.random() * 62)
    if (n < 10) {
      // 1-10
      return n
    }
    if (n < 36) {
      // A-Z
      return String.fromCharCode(n + 55)
    }
    // a-z
    return String.fromCharCode(n + 61)
  }
  while (s.length < len) {
    s += randomchar()
  }
  return s
}

/**
 * 获取鼠标在svg中的真实位置
 * @param  {String} selector svg 的 id
 * @param  {Object} opt      环境变量
 *                  width    即 this.grid.width
 *                  height   即 this.grid.height
 *                  originX  即 d3.event.x
 *                  originY  即 d3.event.y
 * @return {Object} 返回坐标对象以及比值，比值就是 body 的缩放比例
 */
export function getMouseOffset(selector, opt) {
  let { width, height, originX, originY } = opt
  let bbox = document.getElementById(selector).getBoundingClientRect()
  let svgClientWidth = bbox.width
  let svgClientHeight = bbox.height
  let svgClientOffsetX = bbox.x
  let svgClientOffsetY = bbox.y

  // 计算出比值
  let xRate = svgClientWidth / width
  let yRate = svgClientHeight / height

  let x, y
  if (originX && originY) {
    x = (originX - svgClientOffsetX) / xRate
    y = (originY - svgClientOffsetY) / yRate
  }

  return {
    x, y, xRate, yRate
  }
}
