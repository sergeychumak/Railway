<template>
  <li :class="getClassName('listItem')">
    <template v-if="item.childs">
      <div :class="getClassName('listItemLink','group')" @click="toggleShowChilds">
        <div>{{item.name}}</div>
        <i class="material-icons" v-if="item.showChilds===false">expand_more</i>
        <i class="material-icons" v-else>expand_less</i>
      </div>
      <railway-menuItems
        :show="item.showChilds"
        :items="item.childs"></railway-menuItems>
    </template>
    <template v-else>
      <a :class="getClassName('listItemLink')" @click.prevent="clickEvent(item)">{{item.name}}</a>
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
      clickEvent: function(item){
        //return this.$root.clickLink(item)
        // console.log('asd');
         //console.log(this.$parent.$route.push(item.to));
        // router.push('home')
        // if ('to' in item){
        //   this.$route.push(item.to)
        // }
      }
    }
  }
</script>

