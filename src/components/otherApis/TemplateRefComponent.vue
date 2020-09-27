<template>
    <div class="title">12 template ref</div>
    <div class="flex">1 dom节点的引用</div>
    <div class="flex">
        <h3 ref="h3Ref">template ref</h3>
    </div>
    <hr>
    <div class="flex">2 组件的引用</div>
    <div class="flex"><h3>父组件</h3></div>
    <div class="flex">调用子组件的方法更新子组件</div>
    <div class="flex">
        <a-button type="primary" @click="updateSon">update son</a-button>
    </div>
    <template-ref-son-component ref="sonRef"></template-ref-son-component>
</template>

<script>
import TemplateRefSonComponent from './TemplateRefSonComponent.vue'
import { onMounted, ref } from 'vue'
export default {
    setup() {
        const h3Ref = ref(null)

        onMounted(() => {
            console.log('h3Ref.value::', h3Ref.value)
            h3Ref.value.style.color = 'red'
        })

        const sonRef = ref(null)
        const updateSon = () => {
            console.log('sonRef::', sonRef.value)
            console.log('sonRef.value.str::', sonRef.value.str)
            sonRef.value.update()
        }

        return {
            h3Ref,
            updateSon,
            sonRef
        }
    },
    components: {
        TemplateRefSonComponent
    }
}
</script>
