import createAction from '../createAction'
import { LOAD_USER_SUCCESS, LOAD_USER_REQUEST } from '@/actions/userAction'

describe('测试createAction方法', () => {
    it('提供多参数，生成正确的action', () => {
        const text = 'test text'
        const action = {
            type: LOAD_USER_REQUEST,
            username: text,
            page: 'xxx'
        }

        expect(createAction(LOAD_USER_REQUEST, 'username', 'page')(text, 'xxx')).toEqual(action)
    })

    it('提供的参数名称不对，生成的action不对', () => {
        const action = {
            type: LOAD_USER_SUCCESS,
            result: {
                name: 1
            }
        }
        expect(createAction(LOAD_USER_SUCCESS, 'result')('xxx')).not.toEqual(action)
    })
})