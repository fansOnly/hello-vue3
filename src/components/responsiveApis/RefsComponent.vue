<template>
    <div class="title">6 ref unref toRef toRefs isRef</div>
    <div class="flex">
        <div>data: {{data}}</div>
        <a-button type="primary" @click="update">add ++</a-button>
    </div>
    <div class="flex">
        <div>unRefData: {{unRefData}}</div>
        <a-button type="danger" @click="update2">add ++</a-button>
    </div>
    <hr />
    <div class="flex">toRef: 为源响应对象上的property创建一个ref，保持对源对象property的响应式操作连接</div>
    <div class="flex">
        <div>state: {{state}}</div>
        <a-button type="primary" @click="update3">add ++</a-button>
    </div>
    <div class="flex">
        <div>toRefFoo: {{toRefFoo}}</div>
        <a-button type="primary" @click="update4">add ++</a-button>
    </div>
    <hr />
    <div class="flex">toRefs: 将响应式对象转换为普通对象，结果对象的每个property都是指向原始对象property的ref</div>
    <div class="flex">
        <div>toRefsState: {{toRefsState}}</div>
        <a-button type="primary" @click="update5">update ++</a-button>
    </div>
</template>
<script>
import { reactive, ref, toRef, toRefs, unref } from 'vue'
export default {
    setup() {
        const data = ref(0)

        const unRefData = unref(data)

        const update = () => {
            data.value++
        }

        const update2 = () => {
            unRefData.value++
        }

        const state = reactive({
            foo: 1,
            bar: 1
        })

        const toRefFoo = toRef(state, 'foo')
        const update3 = () => {
            state.foo++
        }
        const update4 = () => {
            toRefFoo.value++
        }

        const toRefsState = toRefs(state)

        const update5 = () => {
            toRefsState.bar.value++
        }


        return {
            data,
            unRefData,
            update,
            update2,
            update3,
            update4,
            update5,
            state,
            toRefFoo,
            toRefsState
        }
    }
}
</script>
