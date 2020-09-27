<template>
    <div class="flex">通过readonly实现注入的数据只读</div>
    <div class="flex">inject readonly color: {{colorReadonly}}</div>
    <div class="flex">
        <a-button type="danger" @click="colorReadonly = black">change black</a-button>
    </div>
    <div class="flex">通过provide传入更新函数实现组件内更新注入的数据</div>
    <div class="flex">inject color: {{color}}</div>
    <div class="flex">
        <a-button type="primary" @click="updateColor('blue')">change blue</a-button>
    </div>
</template>
<script>
import { inject } from 'vue'
export default {
    setup() {
        const colorReadonly = inject('themeColor')
        const color = inject('themeColor2')
        const updateColor = inject('updateColorFromInject')

        return {
            colorReadonly,
            color,
            updateColor
        }
    }
}
</script>
