<template>
  <li :class="getClassName('listItem')">
    <template v-if="item.childs">
      <div :class="getClassName('listItemLink','group')" @click="toggleShowChilds">
        <div>{{item.name}}</div>
        <i class="material-icons" v-if="item.showChilds===false">expand_more</i>
        <i class="material-icons" v-else>expand_less</i>
      </div>
      <railway-menuItems
        @clickHandler="clickHandler"
        :show="item.showChilds"
        :items="item.childs"></railway-menuItems>
    </template>
    <template v-else>
      <a :class="getClassName('listItemLink', item.active ? 'active':'')" @click.prevent="clickHandler(item)">{{item.name}}</a>
    </template>
  </li>
</template>
<script>
  export default {
    name: 'railway-menuItem',
    props: ['item','show'],
    methods: {
      getClassName (el="",mod='') {
        return this.$parent.getClassName(el,mod)
      },
      toggleShowChilds: function(){
        if ('showChilds' in this.item){
          this.item.showChilds = !this.item.showChilds
        }else{
          this.$set(this.item, 'showChilds', false)
        }
      },
      clickHandler: function(item){
        this.$emit("clickHandler", item)
      }
    }
  }
</script>

