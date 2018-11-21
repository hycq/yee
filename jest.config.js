/*
 * @Author: baizn
 * @Date: 2018-10-17 17:23:40
 * @LastEditors: baizn
 * @LastEditTime: 2018-10-17 18:00:02
 * @Description: jest配置文件
 */
const path = require('path')
console.log(__dirname, path.resolve(__dirname, './'))

module.exports = {
    verbose: true,
    rootDir: path.resolve(__dirname, './'),
    // 是否收集测试时的覆盖率信息
    collectCoverage: true,
    // 哪些文件需要收集覆盖率信息
    // collectCoverageFrom: ['<rootDir>/app/**/*.{js, jsx}'],
    // 输出覆盖信息文件的目录
    coverageDirectory: '<rootDir>/test/coverage',
    // 统计覆盖信息时需要忽略的文件
    coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/app/index.jsx?'],
    // 用于和webpack的resolve.alias匹配
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '@/(.*)$': '<rootDir>app/$1'
    },
    // 运行测试之前执行的脚步，如解决enzyme兼容
    setupFiles: ['<rootDir>/test/setup.js'],
    // 匹配测试的文件
    testMatch: [
        '<rootDir>/app/**/__test__/**/*.{js, jsx}'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest',
        '^.+\\.jsx$': 'babel-jest'
    },
    // 转换时需要忽略的文件
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'
    ]
}
