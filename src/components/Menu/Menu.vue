<template>
  <aside :class="getClassName()" @click="clickHandler">
    <template v-for="(item,index) in testData">
      <template v-if="item.name">
        <p :class="getClassName('label')">{{item.name}}</p>
        <div :class="getClassName('listItemWrap')">
          <railway-menuItems :items="item.childs"></railway-menuItems>
        </div>
      </template>
      <template v-else-if="item.childs">
        <railway-menuItems :items="item.childs"></railway-menuItems>
      </template>
    </template>

  </aside>
</template>
<script>
  export default {
    name: 'railway-menu',
    props: {
      site: { type: String, default: "default" }
    },
    data: function(){
      return {
        classNamePrefix: "railway",
        className: 'menu' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase(),
        testData : [
          { childs: [
              { name: 'Элемент 0' },
              { name: 'Элемент 1' },
              { name: 'Элемент 2' }
          ] },
          { name: "Группа 1", childs: [
              { name: 'Элемент 1.0' },
              { name: 'Элемент 1.1' },
              { name: 'Элемент 1.2' }
          ] },
          { childs: [
              { name: 'Элемент 0' },
              { name: 'Элемент 1' },
              { name: 'Элемент 2' }
            ] },
          { name: "Группа 1", childs: [
              { name: 'Элемент 1.0' },
              { name: 'Элемент 1.1' },
              { name: 'Элемент 1.2' }
            ] },
          { childs: [
              { name: 'Элемент 0' },
              { name: 'Элемент 1' , childs: [
                  { name: 'Элемент 1.0' },
                  { name: 'Элемент 1.1' },
                  { name: 'Элемент 1.2' }
                ] },
              { name: 'Элемент 2' },
              { name: 'Элемент 3' },
              { name: 'Элемент 4' , childs: [
                  { name: "Группа 1", childs: [
                      { name: 'Элемент 1.0' },
                      { name: 'Элемент 1.1' },
                      { name: 'Элемент 1.2' }
                    ] },
                  { name: "Группа 1", childs: [
                      { name: 'Элемент 1.0' },
                      { name: 'Элемент 1.1' },
                      { name: 'Элемент 1.2' }
                    ] },
              ]},
              { name: 'Элемент 5' },
              { name: 'Элемент 6' },
              { name: 'Элемент 7' }
            ] }

        ]
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
