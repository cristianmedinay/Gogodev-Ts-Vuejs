

<template>
    <div>
        <h1>Card</h1>
        <UserCard v-for="(item, index) in content" :key="index" :content="item"/>
    </div>
</template>

<script lang="ts">
import UserCard from '@/ui/components/UserCard.vue';
import { defineProps } from 'vue';
export default {
    props:{
        content: Object
    },
    setup () {
        return {


        }
    }, components:{
        UserCard
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