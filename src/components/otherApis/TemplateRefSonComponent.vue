<template>
    <div class="flex">
        <h3>子组件</h3>
    </div>
    <div class="flex">str: {{str}}</div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const str = ref('这是子组件')

        const update = () => {
            str.value = '更新子组件赋值'
        }

        return {
            str,
            update
        }
    }
}
</script>
