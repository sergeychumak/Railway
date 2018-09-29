<template>
  <aside :class="getClassName()" @click="clickHandler">
    <railway-menuItems :items="items"></railway-menuItems>
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
          return this.classNamePrefix + ' ' + this.className+el + " "+this.className+el+mod
        }
        return this.classNamePrefix + ' ' + this.className+el
      },
      clickHandler (e) {
        this.$emit('click', e)
      }
    }
  }
</script>
