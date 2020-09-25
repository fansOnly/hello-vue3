<template>
    <div class="wrap">
        <div class="box">
            <ref-component></ref-component>
        </div>
        <div class="box">
            <reactive-component></reactive-component>
        </div>
        <div class="box">
            <raw-component></raw-component>
        </div>
        <div class="box">
            <shallow-reactive-component></shallow-reactive-component>
        </div>
        <div class="box">
            <shallow-readonly-component></shallow-readonly-component>
        </div>
        <div class="box">
            <refs-component></refs-component>
        </div>
        <div class="box">
            <shallow-trigger-ref-component></shallow-trigger-ref-component>
        </div>
        <div class="box">
            <watch-component></watch-component>
        </div>
        <div class="box">
            <div class="title">9 Vue-router</div>
            <div class="flex">
                <a-button type="primary" @click="handleRouter('user', {userid:1})">跳转user</a-button>
                <!-- <a-button type="primary" @click="handleRouter">跳转book</a-button> -->
            </div> 
        </div>
        <div class="box">
            <div class="title">10 Vuex</div>
            <div class="flex">
                <div style="margin-right:20px;">count: {{count}}</div>
                <div>countGetter: {{countGetter}}</div>
            </div>
            <div class="flex">
                <a-button type="primary" @click="increment">add ++</a-button>
                <a-button type="primary" @click="decrement">mius --</a-button></div>
        </div> 
    </div>
</template>

<script>
    import RefComponent from '../../components/responsiveApis/RefComponent.vue'
    import ReactiveComponent from '../../components/responsiveApis/ReactiveComponent.vue'
    import RawComponent from '../../components/responsiveApis/RawComponent.vue'
    import ShallowReactiveComponent from '../../components/responsiveApis/ShallowReactiveComponent.vue'
    import ShallowReadonlyComponent from '../../components/responsiveApis/ShallowReadonlyComponent.vue'
    import RefsComponent from '../../components/responsiveApis/RefsComponent.vue'
    import WatchComponent from '../../components/responsiveApis/WatchComponent.vue'
    import ShallowTriggerRefComponent from '../../components/responsiveApis/ShallowTriggerRefComponent.vue'

    import { computed, onMounted, onUnmounted, onUpdated } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    export default {
        setup() {
            console.log('this', this, 'setup 获取不到this实例')
            onMounted(() => {
                console.log('onMounted....')
            })
            onUpdated(() => {
                console.log('onUpdated...')
            })
            onUnmounted(() => {
                console.log('onUnmounted...')
            })

            const router = useRouter()
            
            const handleRouter = (name, query) => {
                router.push({name, query})
            }

            const store = useStore()

            const count = computed(() => store.state.count.count)

            const countGetter = computed(() => store.getters['count/getCount'])

            const increment = () => {
                store.commit('count/increment')
            }
            const decrement = () => {
                store.commit('count/decrement')
            }

            return {
                handleRouter,
                count,
                countGetter,
                increment,
                decrement
            }
        },
        components: {
            RefComponent,
            ReactiveComponent,
            RawComponent,
            ShallowReactiveComponent,
            ShallowReadonlyComponent,
            RefsComponent,
            WatchComponent,
            ShallowTriggerRefComponent
        },
    }
</script>

<style scoped>
    .wrap {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .box {
        width: 33%;
        height: 400px;
        margin-bottom: 0.3333%;
        border: 1px solid #ddd;
        overflow-y: auto;
    }
</style>
