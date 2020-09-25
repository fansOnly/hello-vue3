<template>
    <div class="title">9 Vue-router</div>
    <div>this is user index page</div>
    <div>route: {{route}}</div>
</template>

<script>
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const route = useRoute()

        onBeforeRouteLeave((to, from) => {
            const answer = window.confirm('warning, you are leaving current page!')
            if (!answer) return false
        })

        onBeforeRouteUpdate((to, from) => {
            console.log({to})
            console.log({from})
        })

        return {
            router,
            route
        }
    }
}
</script>
