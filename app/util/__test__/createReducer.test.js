import createReduce from '../createReducer'

describe('测试createReducer高阶函数', () => {
    it('传入正确的参数，返回正确的reducer', () => {
        const type = 'TEST_TYPE'

        const action = {
            type: type,
            response: {
                result: [
                    {
                        name: 9,
                        age: 2
                    }
                ]
            }
        }

        const newState = {
            result: [
                {
                    name: 9,
                    age: 2
                }
            ]
        }
        expect(createReduce(type)({}, action)).toEqual(newState)
    })
})