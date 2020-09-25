<template>
    <div class="title">7 ShallowRef triggerRef</div>
    <div class="flex">ShallowRef: 创建一个ref，跟踪自己的value变化，但不是响应式</div>
    <div class="flex">
        <div>state: {{state}}</div>
        <a-button type="primary" @click="update">update ++</a-button>
    </div>
</template>
<script>
import { shallowRef } from 'vue'
export default {
    setup() {
        const state = shallowRef({
            foo: 1
        })

        const update = () => {
            state.value.foo++
        }

        return {
            state,
            update
        }
    }
}
</script>
