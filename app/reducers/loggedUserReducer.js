const initialState = {
  pending: false,
  logged: false,
  user: {}
}

/**
 * @description 用户登录reducers
 * @param {object} state state数据
 * @param {object} action action
 * @return {object} 新的state对象
 */
const loggedUserReducer = (state = initialState, action) => {
  if(action.type === 'LOGIN_REQUEST') {
    return Object.assign({}, state, {
      pending: false
    })
  }

  if(action.type === 'LOGIN_SUCCESS') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged
    })
  }

  if(action.type === 'LOAD_USER_SUCCESS') {
    return Object.assign({}, state, {
      user: action.user,
      pending: false,
      logged: true
    })
  }
  
  return state
}

export default loggedUserReducer
