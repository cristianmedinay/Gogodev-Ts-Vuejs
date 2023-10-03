<template>
  <h1>Listado de usuarios</h1>
  <input type="text" v-model="search" @keyup="handleSearch">
  <div>
    <button @click="handleLayout(ListLayout)">Ver en lista</button>
    <button @click="handleLayout(TableLayout)">Ver en tabla</button>
    <button @click="handleLayout(CardLayout)"> Ver en tarjetas</button>
  </div>


  <component :is="layout" :content="filteredUsers"/>

</template>

<script lang="ts">
/* import CardLayout from '@/ui/components/table/CardLayout.vue';
import ListLayout from '@/ui/components/table/ListLayout.vue';
import TableLayout from '@/ui/components/table/TableLayout.vue'; */
import { defineComponent,ref,defineAsyncComponent } from 'vue';
export default defineComponent({


    name: 'HomeView',
    data() {
        return {

        };
    },
    props: {},

    components: {
      
    },

    setup() {
      const ListLayout = defineAsyncComponent(()=>import ('@/ui/components/table/ListLayout.vue'))
      const TableLayout = defineAsyncComponent(()=>import ('@/ui/components/table/TableLayout.vue'))
      const CardLayout = defineAsyncComponent(()=>import ('@/ui/components/table/CardLayout.vue'))

      const layout = ref(ListLayout)
      const search =ref('');
      const handleLayout = (cmp:any) => layout.value=cmp
      const handleSearch =() => {
        filteredUsers.value = users.value.filter(item=> item.name.toLocaleLowerCase().includes(search.value.toLowerCase()))
      }

      const permisos=ref([
        {
          valor:'user',
      
        },
        {
          valor:'admin',
          
        }
        ])
      const users=ref([
        {
          name:'luis',
          age:50,
          position:"frontend"
        },
        {
          name:'cris',
          age:50,
          position:"archited"
        }
        ])
        const filteredUsers =ref([])as any;

        filteredUsers.value = users.value

      return{
        users,
        layout,
        handleLayout,
        ListLayout,
        TableLayout,
        CardLayout,
        permisos,
        
        handleSearch,search,filteredUsers
      }

    },

    mounted() {},

    methods: {},

    computed: {},

    watch: {},

    directives: {},

    filters: {}
});
</script>

<style lang="scss" scoped>

</style>