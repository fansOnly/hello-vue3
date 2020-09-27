<template>
    <div class="title">8 watch watchEffect</div>
    <div class="flex">监听多个对象</div>
    <div class="flex">
        <div>state: {{state}}</div>
        <a-button type="primary" @click="updateState">update ++</a-button>
    </div>
    <div class="flex">watch state: {{record.state}}</div>
    <div class="flex">
        <div>data: {{data}}</div>
        <a-button type="primary" @click="updateData">update ++</a-button>
    </div>
    <div class="flex">watch data: {{record.data}}</div>
    <hr>
    <div class="flex">停止侦听</div>
    <div class="flex">1 通过显式的调用返回值停止侦听</div>
    <div class="flex">2 watchEffect会在组件卸载时自动停止</div>
    <div class="flex">
        <div>valueRef: {{valueRef}}</div>
        <div style="margin-left:10px;">valueWatchEffect: {{valueWatchEffect}}</div>
        <a-button type="primary" @click="start">start</a-button>
        <a-button type="primary" @click="stop">stop</a-button>
    </div>
    <div class="flex">关闭侦听后watch仍然会被触发，watchEffect不再触发</div>
</template>

<script>
import { reactive, ref, watch, watchEffect } from 'vue'
export default {
    setup() {
        const state = ref(0)

        const data = ref(10)

        const record = reactive({
            state: {},
            data: {}
        })

        watch(
            [state, data],
            ([stateVal, dataVal], [stateOldVal, dataOldVal]) => {
                record.state.old = stateOldVal
                record.state.new = stateVal
                record.data.old = dataOldVal
                record.data.new = dataVal
            }
        )

        const updateState = () => {
            state.value++
        }

        const updateData = () => {
            data.value++
        }

        const valueRef = ref(0)

        let timer

        const stopWatch = watch(valueRef, (val, oldVal, onCleanup) => {
            console.log('watch valueRef::', valueRef.value)
        })

        const valueWatchEffect = ref(0)

        const stopWatchEffect = watchEffect(() => {
            valueWatchEffect.value = valueRef.value
            console.log('watch valueWatchEffect::', valueWatchEffect.value)
        })

        const start = () => {
            timer = setInterval(() => {
                valueRef.value++
            }, 1000);
        }

        const stop = () => {
            console.log('停止侦听.')
            stopWatch()
            stopWatchEffect()
            clearInterval(timer)
        }

        return {
            state,
            data,
            updateState,
            updateData,
            record,
            valueRef,
            valueWatchEffect,
            start,
            stop
        }
    }
}
</script>
