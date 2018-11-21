import loggedUserReducer from '../loggedUserReducer'

const initailState = {
    pending: false,
    logged: false,
    user: {}
}
describe('测试Reducers', () => {
    it('actionType没有匹配上，返回initialState', () => {
        const action = {
            type: 'TEST'
        }

        expect(loggedUserReducer(initailState, action)).toEqual(initailState)
    })

    it('actionType匹配LOAD_USER_SUCCESS，返回新数据', () => {
        const action = {
            type: 'LOAD_USER_SUCCESS',
            user: {
                name: 'baizn',
                dept: 'product service dept'
            }
        }
        const result = {
            user: {
                name: 'baizn',
                dept: 'product service dept'
            },
            pending: false,
            logged: true
        }
        expect(loggedUserReducer(initailState, action)).toEqual(result)
    })
})