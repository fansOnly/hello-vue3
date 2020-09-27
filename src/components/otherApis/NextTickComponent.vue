<template>
    <div class="title">13 nextTick</div>
    <div class="flex">
        <a-button type="primary" @click="showInput">{{btnText}}</a-button>
        <a-button type="primary" @click="showInputOnFocus">show and focus</a-button>
    </div>
    <div v-if="show" class="flex">
        <input ref="ipt" type="text" placeholder="please enter ...">
    </div>
</template>

<script>
import { nextTick, ref } from 'vue'
export default {
    setup() {
        const show = ref(false)

        const btnText = ref('show input')

        const showInput = async () => {
            show.value = !show.value
            await nextTick()
            // do something after dom updated...
            btnText.value = show.value ? 'hide input' : 'show input'
        }

        return {
            show,
            btnText,
            showInput
        }
    },
    methods: {
        showInputOnFocus() {
            this.show = !this.show
            this.$nextTick(() => {
                this.btnText = this.show ? 'hide input' : 'show input'
                this.$refs.ipt.focus()
            })
        }
    }
}
</script>
