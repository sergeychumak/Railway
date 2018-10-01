<template>
  <aside :class="getClassName()">
    <railway-menuItems :items="items" @clickHandler="clickHandler"></railway-menuItems>
  </aside>
</template>
<script>
  export default {
    name: 'railway-menu',
    props: {
      site: { type: String, default: "default" },
      items: {type: Array, default: [] }
    },
    data: function(){
      return {
        classNamePrefix: "railway",
        className: 'menu' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase()
      }
    },
    methods: {
      getClassName: function(el="",mod=''){
        if (el) el = "__"+el
        if (mod) {
          mod = "_"+mod
          return this.classNamePrefix + ' ' + this.className + el + " "+this.className + el + mod
        }
        return this.classNamePrefix + ' ' + this.className+el
      },
      clickHandler (item) {
        this.$emit('clickHandler', item)
      }
    }
  }
</script>
