import { createStore, createLogger } from 'vuex'

const files = require.context('./modules', true, /\.js$/)

const modules = files.keys().reduce((storeModules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = files(modulePath)
    storeModules[moduleName] = value.default
    return storeModules
}, {})

export default createStore({
    modules,
    plugins: process.env === 'development' ? [createLogger()] : []
})
