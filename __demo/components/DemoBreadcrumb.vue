<template>
 <div>
   <railway-breadcrumb :list="items"></railway-breadcrumb>
   <railway-breadcrumb :list="items" small></railway-breadcrumb>
   <railway-breadcrumb :list="items" medium></railway-breadcrumb>
   <railway-breadcrumb :list="items" large></railway-breadcrumb>
   <railway-breadcrumb :list="items" centered></railway-breadcrumb>
   <railway-breadcrumb :list="items" right></railway-breadcrumb>
 </div>
 </template>

<script>
  export default {
    data: function () {
      return {
        items: [
          {name:"Main",url:"asd2"},
          {name:"Test",url:"asd2"},
          {name:"test1",url:"asd2"},
          {name:"test2",url:"asd2"}
        ]
      }
    }
  }
</script>
