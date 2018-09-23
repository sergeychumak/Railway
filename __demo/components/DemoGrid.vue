<template>
  <div>



      <railway-grid style="background: #eee; margin-bottom: 10px;">
        <railway-grid  grid_1_4 ><div style="background: #ddd; padding: 10px; width:100%;">grid_1_4</div></railway-grid>
        <railway-grid  grid_3_4 ><div style="background: #ddd; padding: 10px; width:100%;">grid_1_4</div></railway-grid>
      </railway-grid>


    <template v-for="j in [1,2,4,6,8,12,24]">
      <h1>#{{j}}</h1>
      <template v-for="i in j">
        <railway-grid style="background: #eee; margin-bottom: 10px;">
          <railway-grid  :gridType="'grid-'+i+'-'+j" ><div style="background: #ddd; padding: 10px; width:100%;">{{''+i+'_'+j}}</div></railway-grid>
        </railway-grid>
      </template>
    </template>



  </div>
</template>

