<template>
    <div class="title">1 ref computed watch</div>
    <div class="flex">创建一个内部值并返回一个响应式的ref对象，指向内部值的单个property.vlaue</div>
    <div class="flex">
        <div>原始值：{{count}}</div>
        <div>双倍：{{doubleCount}}</div>
        <a-button type="primary" @click="add">update count++</a-button>
    </div>
</template>

<script>
    import { computed, ref, watch } from 'vue'
    export default {
        setup() {
            const count = ref(0)
            const doubleCount = computed(() => count.value * 2)

            watch(
                () => count.value,
                (val, oldVal) => {
                    console.log('count', { val }, { oldVal })
                }
            )

            const add = () => {
                count.value++
            }

            return {
                count,
                add,
                doubleCount,
            }
        },
    }
</script>
