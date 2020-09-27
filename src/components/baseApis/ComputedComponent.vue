<template>
    <div class="title">10 computed</div>
    <div class="flex">只读的computed</div>
    <div class="flex">
        <div>nameComputed: {{nameComputed}}</div>
        <a-button type="danger" @click="updateName">update name</a-button>
    </div>
    <hr>
    <div class="flex">可读可写的computed</div>
    <div class="flex">countRef: {{countRef}}</div>
    <div class="flex">
        <div>countComputed: {{countComputed}}</div>
        <a-button type="primary" @click="update">update count</a-button>
    </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
    setup() {
        const nameComputed = computed(() => 'readonly computed name')

        const updateName = () => {
            nameComputed.value = 'new name'
        }

        const countRef = ref(0)
        const countComputed = computed({
            get() {
                return countRef.value * 2
            },
            set(val) {
                countRef.value += 5
            }
        })

        const update = () => {
            countComputed.value++
        }

        return {
            nameComputed,
            updateName,
            countRef,
            countComputed,
            update
        }
    }
}
</script>
