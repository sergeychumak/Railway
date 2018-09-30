<template>
  <ul :class="getClassName('list')">
    <template v-for="item in items">
      <railway-menuItem :item="item" @clickHandler="clickHandler"></railway-menuItem>
    </template>
  </ul>
</template>
<script>
  export default {
    name: 'railway-menuItems',
    props: {
      'items': {type: Array, default: []},
      'show': {type: Boolean, default: true},
    },
    methods: {
      getClassName (el="",mod='') {
        if (!this.show) mod="hidden"
        return this.$parent.getClassName(el,mod)
      },
      clickHandler: function(item){
        this.$emit('clickHandler', item)
      }
    }
  }
</script>
