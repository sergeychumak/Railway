<template>
 <div>

     <railway-grid grid_1_1>
       <div style="width: 100%;padding: 10px;border-bottom: 1px solid #eee">RailWay v.0.0.1 | wagons of components</div>
     </railway-grid>


   <railway-grid>
     <railway-grid  grid_1_4 >
       <div style="width: 100%;border-right: 1px solid #eee">
         <railway-menu :items="items"></railway-menu>
       </div>

     </railway-grid>
     <railway-grid  grid_3_4 >
       <router-view
     </railway-grid>
   </railway-grid>
 </div>
 </template>


<script>
  export default {
    data: function () {
      return {
        items: [
          { name: 'О системе' },
          { name: 'Разрабочики' },
          { name: 'Компоненты', showChilds: true, childs: [
              { name: 'Button', to: "DemoButton" },
              { name: 'Grid' },
              { name: 'Breadcrumb' },
              { name: 'Menu' }
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
