<template>
    <div class="title">3 shallowReactive</div>
    <div class="flex">创建一个响应式代理，使其追踪自身的property的响应性，但不执行嵌套对象的响应式（暴露原始值）</div>
            <div class="flex">
                <div>shallowReactive: {{data}}</div>
            </div>
            <div class="flex">
                <a-button>isReactive data: {{isReactiveVal(data)}}</a-button>
                <a-button>isReactive data.foo: {{isReactiveVal(data.foo)}}</a-button>
                <a-button>isReactive data.nested: {{isReactiveVal(data.nested)}}</a-button>
            </div>
            <div class="flex around">
                <a-button type="primary" @click="update">update data.foo</a-button>
                <a-button type="primary" @click="update2">update data.nested.bar</a-button>
            </div>
</template>
<script>
import { isReactive, shallowReactive } from 'vue'
export default {
    setup() {
        const data = shallowReactive({
            foo: 1,
            nested: {
                bar: 1
            }
        })

        const isReactiveVal = val => isReactive(val)

        const update = () => {
            data.foo++
        }

        const update2 = () => {
            data.nested.bar++
        }

        return {
            data,
            update,
            update2,
            isReactiveVal
        }
    }
}
</script>
