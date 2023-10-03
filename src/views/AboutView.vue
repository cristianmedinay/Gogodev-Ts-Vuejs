<template>
  <div class="about">

    <MainLayoutVue>
      <h1>Contact Section</h1>

    </MainLayoutVue>

  </div>
</template>

<script lang="ts">
import type MainLayoutVue from '@/ui/layout/MainLayout.vue';


export default {
    setup(){

    },components:{
      MainLayoutVue
    }
}
</script>


<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
