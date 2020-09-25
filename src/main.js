import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import './assets/common.css'

import router from './router'
import store from './store'

import { Button } from 'ant-design-vue'

const app = createApp(App)

app.use(Button)

app.use(router)
app.use(store)

app.mixin({
    created() {
        // console.log('mixin ...')
    }
})

app.mount('#app')
