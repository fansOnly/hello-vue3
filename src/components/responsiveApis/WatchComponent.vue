<template>
    <div class="title">8 Watch</div>
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
</template>

<script>
import { reactive, ref, watch } from 'vue'
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

        return {
            state,
            data,
            updateState,
            updateData,
            record
        }
    }
}
</script>
