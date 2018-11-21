import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const UserNav = ({ match }) => (
  <nav className='context-nav'>
    <NavLink to={`${match.path}`} exact={true} activeClassName='active'>用户列表</NavLink>
    <NavLink to={`${match.path}/line`} activeClassName='active'>Echarts图表</NavLink>
  </nav>
)

export default withRouter(UserNav)
