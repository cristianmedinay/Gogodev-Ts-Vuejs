<template>
    <div>

        <input type="text" v-model="note">
        <button @click="sendToServer">Enviar</button>
        
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    
    setup () {

        let note = ref('');
        const sendToServer = async () => {
            const rawResponse = await fetch('http://localhost:3000',{
              method:'POST',
              headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
                'Authorization':'Bearer '
              },
              body:JSON.stringify({note:note.value})
            })
            const response = await rawResponse.json()
        }


        return {
         note,
         sendToServer
        }
    }
})
</script>

<style scoped>

</style>