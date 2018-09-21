<template>
 <div>
   <railway-lazy-number :value="value"></railway-lazy-number>
   <railway-button @click="setValue">set value</railway-button>
   <railway-lazy-number :value="value1" :countStep=50></railway-lazy-number>
   <railway-button @click="setValue1">set value</railway-button>
   <railway-lazy-number :value="value2" :countStep=100></railway-lazy-number>
   <railway-button @click="setValue2">set value</railway-button>
 </div>
 </template>
<script>
  export default {
    data : function(){
      return {
        value : 100,
        value1 : 1000,
        value2 : 1000,
      }
    },
    methods: {
      setValue: function () {
        this.value = Math.ceil(Math.random() * 100 *10) ;
      },
      setValue1: function () {
        this.value1 = Math.ceil(Math.random() * 100 * 100) ;
      },
      setValue2: function () {
        this.value2 = Math.ceil(Math.random() * 100 * 1000) ;
      }
    }
  }
</script>
