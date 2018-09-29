<template>
  <railway-menu
    :items="items"
  ></railway-menu>
</template>


<script>
  export default {
    methods:{
      clickLink:function () {
        console.log(1)
      }
    },
    data: function () {
      return {
        items: [
          { name: 'Элемент 10' },
          { name: 'Элемент 1' },
          { name: 'Элемент 1', showChilds: false, childs: [
              { name: 'Элемент 1.0' },
              { name: 'Элемент 1.1' },
              { name: 'Элемент 1.2' }
            ]
          },
          { name: 'Элемент 10' },
          { name: 'Элемент 1' },
          { name: 'Элемент 1',  childs: [
              { name: 'Элемент 1.0' },
              { name: 'Элемент 1.1' ,  childs: [
                  { name: 'Элемент 1.0' },
                  { name: 'Элемент 1.1' },
                  { name: 'Элемент 1.2' }
                ] },
              { name: 'Элемент 1.2' }
            ]
          },
          { name: 'Элемент 10' },
          { name: 'Элемент 1' }
        ]
      }
    }
  }
</script>
