<template>
    <div class="title">5 ShallowReadonly</div>
    <div class="flex">创建一个代理，使其自身的property只读，但不执行嵌套对象的深度只读转换（暴露原始值）</div>
    <div class="flex">
                <div>ShallowReadonly: {{data}}</div>
            </div>
            <div class="flex">
                <a-button>isReadonly data: {{isisReadonlyVal(data)}}</a-button>
                <a-button>isReadonly data.foo: {{isisReadonlyVal(data.foo)}}</a-button>
                <a-button>isReadonly data.nested: {{isisReadonlyVal(data.nested)}}</a-button>
            </div>
            <div class="flex around">
                <a-button type="danger" @click="update">update data.foo</a-button>
                <a-button type="primary" @click="update2">update data.nested.bar</a-button>
            </div>
</template>
<script>
import { isReadonly, shallowReadonly } from 'vue'
export default {
    setup() {
        const data = shallowReadonly({
            foo: 1,
            nested: {
                bar: 1
            }
        })

        const update = () => {
            data.foo++
        }

        const update2 = () => {
            data.nested.bar++
        }

        const isisReadonlyVal = val => isReadonly(val)

        return {
            data,
            update,
            update2,
            isisReadonlyVal
        }
    }
}
</script>
