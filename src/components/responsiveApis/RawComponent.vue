<template>
    <div class="title">3 toRaw markRaw</div>
    <div class="flex">toRaw: 返回reactive / readonly代理的原始对象</div>
    <div class="flex">rawFoo === foo: {{rawFoo === foo}}</div>
    <hr>
    <div class="flex">markRaw: 标记一个对象，使其永远不会转换为代理。返回对象本身。</div>
    <div class="flex">isReactive obj: {{isReactiveVal(obj)}}</div>
    <div class="flex">isReactive bar: {{isReactiveVal(bar)}}</div>
</template>

<script>
import { computed, isReactive, markRaw, reactive, toRaw } from 'vue'
export default {
    setup() {
        const foo = {}
        const reactiveFoo = reactive(foo)
        
        const rawFoo = toRaw(reactiveFoo)

        const obj = markRaw({})

        const isReactiveVal = val => isReactive(val)

        const bar = reactive(obj)

        return {
            foo,
            rawFoo,
            obj,
            bar,
            isReactiveVal
        }
    }
}
</script>
