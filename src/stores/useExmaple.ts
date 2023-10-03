import {defineStore} from 'pinia'

export const useExample = defineStore('useExample',{
    
    state:()=> {
        return {   
        count:1
        }
    }, 
    getters:{
        getCount(state){
            return state.count
        },
    },
    actions: {
        init(){
          const initCount = localStorage.getItem('count')
          if(initCount){
            this.count = parseInt(initCount)
          }
        },
        increment(val = 1){
            this.count += val
            localStorage.setItem('count',this.count.toString())
        }
    },
    persist: {
        storage: sessionStorage,
        paths: ['count']
    }

});