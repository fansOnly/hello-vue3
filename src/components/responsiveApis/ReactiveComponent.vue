<template>
    <div class="title">2 reactive readonly</div>
            <div class="flex">
                <div>响应式对象 user：{{user}}</div>
                <a-button type="primary" @click="update">update name</a-button>
            </div>
            <div class="flex">
                <a-button>isProxyUser: {{isProxyVal(user)}}</a-button>
                <a-button>isReactiveUser: {{isReactiveVal(user)}}</a-button>
                <a-button>isReadonlyUser: {{isReadonlyVal(user)}}</a-button>
            </div>
        <hr>
            <div class="flex">
                <div>响应式对象的只读代理 'readonly(user)'：{{user2}}</div>
                <a-button type="danger" @click="update2">update name</a-button>
            </div>
            <div class="flex">
                <a-button>isProxyUser: {{isProxyVal(user2)}}</a-button>
                <a-button>isReactiveUser: {{isReactiveVal(user2)}}</a-button>
                <a-button>isReadonlyUser: {{isReadonlyVal(user2)}}</a-button>
            </div>
        <hr>
            <div class="flex">
                <div>普通对象的只读代理 'readonly({})'：{{user3}}</div>
                <a-button type="danger" @click="update3">update name</a-button>
            </div>
            <div class="flex">
                <a-button>isProxyUser: {{isProxyVal(user3)}}</a-button>
                <a-button>isReactiveUser: {{isReactiveVal(user3)}}</a-button>
                <a-button>isReadonlyUser: {{isReadonlyVal(user3)}}</a-button>
            </div>
</template>

<script>
import { computed, isProxy, reactive, readonly, watchEffect, isReactive, isReadonly } from 'vue'
export default {
    setup() {
        const user = reactive({
            name: 'user1'
        })

        const user2 = readonly(user)

        const user3 = readonly({
            name: 'user2'
        })

        const isProxyVal = (user) => isProxy(user)
        const isReactiveVal = (user) => isReactive(user)
        const isReadonlyVal = (user) => isReadonly(user)

        // watchEffect(() => {
        //     console.log('user1', user.name)
        //     console.log('user2', user2.name)
        //     console.log('user3', user3.name)
        // })

        const update = () => {
            user.name = 'user111111'
        }

        const update2 = () => {
            user2.name = 'user22222'
        }

        const update3 = () => {
            user3.name = 'use333'
        }

        return {
            user,
            update,
            isProxyVal,
            isReactiveVal,
            isReadonlyVal,
            user2,
            update2,
            user3,
            update3
        }
    }
}
</script>
