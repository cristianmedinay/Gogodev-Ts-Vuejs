<template>
    <div>
    <h2>User Card</h2>
        <p> {{ content.name }}</p>
        <p> {{ content.age }}</p>
        <p> {{ content.position }}</p>
    </div>
</template>

<script lang="ts">
import { defineComponent,defineProps } from 'vue';
export default defineComponent({
    name: 'usercard',
    props:{
        content:String
    },
    data() {
       

        return {};
    },

    components: {},

    setup() {

        const props = defineProps(['content'])
        return {
            props
        }
    },

    mounted() {
       /*  console.log(content) */
    },

    methods: {

    },

    computed: {

    },

    watch: {},

    directives: {},

    filters: {}
});
</script>

<style lang="scss" scoped>

</style>