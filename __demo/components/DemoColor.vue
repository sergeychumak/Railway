<template>
 <div>
   <div v-for="element in ['primary','info','success','warning', 'error', 'title', 'content', 'subColor', 'disabled', 'border', 'divider', 'background' ]">
     <br/>
     <div :class="'color-block color-block__' + element">
       {{element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}}
     </div>
     <div
       v-for="item in ['light','dark','invert']"
       :class="'color-block color-block__' + element + ' color-block__' + element + '_' + item"
     >
       {{item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()}}
       {{element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()}}
     </div>

   </div>
 </div>
 </template>

