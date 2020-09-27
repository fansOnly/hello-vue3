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
            <props-component title="我是props传入标题"></props-component>   
        </div> 
        <div class="box">
            <computed-component></computed-component>
        </div>
        <div class="box">
            <div class="title">11 provide inject</div>
            <div class="flex">provide readonly color: {{color}}</div>
            <div class="flex">
                <a-button type="primary" @click="color = 'red'">change red</a-button>
                <a-button type="primary" @click="color = 'gray'">change gray</a-button>
            </div>
            <hr>
            <provide-inject-component></provide-inject-component>
        </div>
        <div class="box">
            <template-ref-component></template-ref-component>
        </div>
        <div class="box">
            <next-tick-component></next-tick-component>
        </div>
        <div class="box">
            <div class="title">99 Vue-router</div>
            <div class="flex">
                <a-button type="primary" @click="handleRouter('user', {userid:1})">跳转user</a-button>
                <!-- <a-button type="primary" @click="handleRouter">跳转book</a-button> -->
            </div> 
        </div>
        <div class="box">
            <div class="title">100 Vuex</div>
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
    import ShallowTriggerRefComponent from '../../components/responsiveApis/ShallowTriggerRefComponent.vue'

    import WatchComponent from '../../components/baseApis/WatchComponent.vue'
    import PropsComponent from '../../components/baseApis/PropsComponent.vue'
    import ComputedComponent from '../../components/baseApis/ComputedComponent.vue'
    import ProvideInjectComponent from '../../components/baseApis/ProvideInjectComponent.vue'

    import TemplateRefComponent from '../../components/otherApis/TemplateRefComponent.vue'
    import NextTickComponent from '../../components/otherApis/NextTickComponent.vue'

    import { computed, onMounted, onUnmounted, onUpdated, provide, readonly, ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { useStore } from 'vuex'

    export default {
        setup() {
            console.log('1 setup...', this, 'setup 获取不到this实例')
            onMounted(() => {
                console.log('4 onMounted....')
            })
            onUpdated(() => {
                console.log('5 onUpdated...')
            })
            onUnmounted(() => {
                console.log('6 onUnmounted...')
            })

            // router
            const router = useRouter()
            const handleRouter = (name, query) => {
                router.push({name, query})
            }

            // store
            const store = useStore()
            const count = computed(() => store.state.count.count)
            const countGetter = computed(() => store.getters['count/getCount'])
            const increment = () => {
                store.commit('count/increment')
            }
            const decrement = () => {
                store.commit('count/decrement')
            }

            // provide
            const color = ref('green')

            const updateColor = val => {
                color.value = val
            }

            provide('themeColor', readonly(color))
            provide('themeColor2', color)
            provide('updateColorFromInject', updateColor)


            return {
                handleRouter,
                count,
                countGetter,
                increment,
                decrement,
                color
            }
        },
        beforeCreate() {
            console.log('2 beforeCreated..., this is not nedded')
        },
        created() {
            console.log('3 created..., this is not nedded')
        },
        components: {
            RefComponent,
            ReactiveComponent,
            RawComponent,
            ShallowReactiveComponent,
            ShallowReadonlyComponent,
            RefsComponent,
            WatchComponent,
            ShallowTriggerRefComponent,
            PropsComponent,
            ComputedComponent,
            ProvideInjectComponent,
            TemplateRefComponent,
            NextTickComponent
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
