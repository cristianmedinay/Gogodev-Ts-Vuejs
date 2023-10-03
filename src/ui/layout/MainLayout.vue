<template>
    <div class="menu">
        <AuxBar/>

        <div>
            <div>
                <MenuSidebar/>
            </div>
            <div>
                <slot name="aux"></slot>
            </div>
            <div>
                <slot name="aux"></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

import AuxBar from '../components/menu/AuxBar.vue';
import MenuSidebar from '../components/menu/MenuSidebar.vue';
export default {
    setup () {
        

        return {}
    },components:{
        AuxBar,MenuSidebar
    }
}
</script>

<style lang="scss" scoped>

.menu{
    background-color: rgb(153, 69, 69);
    color:white
}
</style>