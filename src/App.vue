<script setup>
import childvue from '../src/components/child.vue'
import axios from 'axios'

</script>

<template>
  <div>
   <childvue  :products="products" />
  
  </div>
</template>

<style>
</style>

<script>
export default {
  data(){
    return{
      products:[]
  }
  },
  created() {
   this.axios.get('https://fakestoreapi.com/products').then(({data}) =>{
    this.products=data
   })
  },
 
}
  

</script>

