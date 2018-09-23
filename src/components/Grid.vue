<template>
  <div
    :class="classObject"
  >
   <slot/>
  </div>
</template>
<script>
  export default {
    name: 'railway-grid',
    props: {
      site: { type: String, default: "default" },

      grid_1_24: { type: Boolean },
      grid_2_24: { type: Boolean },
      grid_3_24: { type: Boolean },
      grid_4_24: { type: Boolean },
      grid_5_24: { type: Boolean },
      grid_6_24: { type: Boolean },
      grid_7_24: { type: Boolean },
      grid_8_24: { type: Boolean },
      grid_9_24: { type: Boolean },
      grid_10_24: { type: Boolean },
      grid_11_24: { type: Boolean },
      grid_12_24: { type: Boolean },
      grid_13_24: { type: Boolean },
      grid_14_24: { type: Boolean },
      grid_15_24: { type: Boolean },
      grid_16_24: { type: Boolean },
      grid_17_24: { type: Boolean },
      grid_18_24: { type: Boolean },
      grid_19_24: { type: Boolean },
      grid_20_24: { type: Boolean },
      grid_21_24: { type: Boolean },
      grid_22_24: { type: Boolean },
      grid_23_24: { type: Boolean },
      grid_24_24: { type: Boolean },

      grid_1_12: { type: Boolean },
      grid_2_12: { type: Boolean },
      grid_3_12: { type: Boolean },
      grid_4_12: { type: Boolean },
      grid_5_12: { type: Boolean },
      grid_6_12: { type: Boolean },
      grid_7_12: { type: Boolean },
      grid_8_12: { type: Boolean },
      grid_9_12: { type: Boolean },
      grid_10_12: { type: Boolean },
      grid_11_12: { type: Boolean },
      grid_12_12: { type: Boolean },

      grid_1_8: { type: Boolean },
      grid_2_8: { type: Boolean },
      grid_3_8: { type: Boolean },
      grid_4_8: { type: Boolean },
      grid_5_8: { type: Boolean },
      grid_6_8: { type: Boolean },
      grid_7_8: { type: Boolean },
      grid_8_8: { type: Boolean },

      grid_1_6: { type: Boolean },
      grid_2_6: { type: Boolean },
      grid_3_6: { type: Boolean },
      grid_4_6: { type: Boolean },
      grid_5_6: { type: Boolean },
      grid_6_6: { type: Boolean },

      grid_1_4: { type: Boolean },
      grid_2_4: { type: Boolean },
      grid_3_4: { type: Boolean },
      grid_4_4: { type: Boolean },

      grid_1_2: { type: Boolean },
      grid_2_2: { type: Boolean },

      grid_1: { type: Boolean },
      grid_1_1: { type: Boolean },

      gridType: { type: String },



    },
    computed: {
      classObject () {
        return [
          'railway',
          'grid' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase(),
          this.gridType,
          { 'grid-1-24': this.grid_1_24 },
          { 'grid-2-24': this.grid_2_24 },
          { 'grid-3-24': this.grid_3_24 },
          { 'grid-4-24': this.grid_4_24 },
          { 'grid-5-24': this.grid_5_24 },
          { 'grid-6-24': this.grid_6_24 },
          { 'grid-7-24': this.grid_7_24 },
          { 'grid-8-24': this.grid_8_24 },
          { 'grid-9-24': this.grid_9_24 },
          { 'grid-10-24': this.grid_10_24 },
          { 'grid-11-24': this.grid_11_24 },
          { 'grid-12-24': this.grid_12_24 },
          { 'grid-13-24': this.grid_13_24 },
          { 'grid-14-24': this.grid_14_24 },
          { 'grid-15-24': this.grid_15_24 },
          { 'grid-16-24': this.grid_16_24 },
          { 'grid-17-24': this.grid_17_24 },
          { 'grid-18-24': this.grid_18_24 },
          { 'grid-19-24': this.grid_19_24 },
          { 'grid-20-24': this.grid_20_24 },
          { 'grid-21-24': this.grid_21_24 },
          { 'grid-22-24': this.grid_22_24 },
          { 'grid-23-24': this.grid_23_24 },
          { 'grid-24-24': this.grid_24_24 },

          { 'grid-1-12': this.grid_1_12 },
          { 'grid-2-12': this.grid_2_12 },
          { 'grid-3-12': this.grid_3_12 },
          { 'grid-4-12': this.grid_4_12 },
          { 'grid-5-12': this.grid_5_12 },
          { 'grid-6-12': this.grid_6_12 },
          { 'grid-7-12': this.grid_7_12 },
          { 'grid-8-12': this.grid_8_12 },
          { 'grid-9-12': this.grid_9_12 },
          { 'grid-10-12': this.grid_10_12 },
          { 'grid-11-12': this.grid_11_12 },
          { 'grid-12-12': this.grid_12_12 },

          { 'grid-1-8': this.grid_1_8 },
          { 'grid-2-8': this.grid_2_8 },
          { 'grid-3-8': this.grid_3_8 },
          { 'grid-4-8': this.grid_4_8 },
          { 'grid-5-8': this.grid_5_8 },
          { 'grid-6-8': this.grid_6_8 },
          { 'grid-7-8': this.grid_7_8 },
          { 'grid-8-8': this.grid_8_8 },

          { 'grid-1-6': this.grid_1_6 },
          { 'grid-2-6': this.grid_2_6 },
          { 'grid-3-6': this.grid_3_6 },
          { 'grid-4-6': this.grid_4_6 },
          { 'grid-5-6': this.grid_5_6 },
          { 'grid-6-6': this.grid_6_6 },

          { 'grid-1-4': this.grid_1_4 },
          { 'grid-2-4': this.grid_2_4 },
          { 'grid-3-4': this.grid_3_4 },
          { 'grid-4-4': this.grid_4_4 },

          { 'grid-1-2': this.grid_1_2 },
          { 'grid-2-2': this.grid_2_2 },

          { 'grid-1': this.grid_1 },
          { 'grid-1-1': this.grid_1_1 }
        ]
      }
    }
  }
</script>
