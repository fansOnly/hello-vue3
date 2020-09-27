<template>
    <div class="title">9 props context</div>
    <div class="flex">props 是响应式数据，不能被直接解构，可以通过toRefs转换后解构</div>
    <div class="flex">
        <pre class="highlight">
            <code>const { title: propTitle } = toRefs(props)</code>
        </pre>
    </div>
    <div class="flex">props.title: {{propTitle}}</div>
    <hr>
    <div class="flex">context可以被解构, 暴露三个property attrs, slots, emit</div>
    <div class="flex">
        <pre class="highlight">
            <code>const { attrs, slots, emit } = context</code>
        </pre>
    </div>
    <div class="flex">attrs: {{attrs}}</div>
    <div class="flex">slots: {{slots}}</div>
    <div class="flex">emit: {{emit}}</div>
</template>

<script>
import { toRefs } from 'vue'
export default {
    props: ['title'],
    setup(props, context) {
        console.log('props 是响应式数据，不能被直接解构', props)
        console.log('context可以被解构', context)

        const { title: propTitle } = toRefs(props)

        const { attrs, slots, emit } = context

        return {
            propTitle,
            attrs,
            slots,
            emit,
        }
    }
}
</script>
