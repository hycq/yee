import React from 'react'
import { Switch, Route, NavLink } from 'react-router-dom'
import UserNav from '@/components/users/userNav'
import './user.scss'

// Sub Layouts
import LineChart from '@/components/users/lineChart'
import UserList from './userList'

const UserSubLayout = ({ match }) => (
  <div className='user-sub-layout'>
    <aside>
      <UserNav />
    </aside>
    <div className='primary-content'>
      <Switch>
        <Route path={match.path} exact={true} component={UserList} />
        <Route path={`${match.path}/line`} exact={true} component={LineChart} />
      </Switch>
    </div>
  </div>
)

export default UserSubLayout
