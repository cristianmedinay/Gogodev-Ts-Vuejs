

<template>
    <div>
        <h1>Card</h1>
        <UserList v-for="(item, index) in content" :key="index" :content="item"/>
    </div>
</template>

<script lang="ts">
import UserList from '@/ui/components/UserList.vue';
import { defineProps } from 'vue';
export default {
    props:{
        content: Object
    },
    setup () {
        return {


        }
    }, components:{
        UserList
    },
    
    computed: {
        
    
    },
    mounted(){
        console.log(this.content)
    }

}
</script>

<style lang="scss" scoped>

</style>