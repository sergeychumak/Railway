<template>
  <ul :class="getClassName('listItem')">
    <template v-for="item in items">
      <template v-if="item.childs">
        <!--<li :class="getClassName('listItem')">-->
          <!--<a :class="getClassName('listItemLink')">{{item.name}}</a>-->
          <!--<railway-menuItems :items="item.childs"></railway-menuItems>-->
        <!--</li>-->

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
      <template v-else>
        <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">{{item.name}}</a></li>
      </template>
    </template>
  </ul>
</template>
<script>
  export default {
    name: 'railway-menuItems',
    props: {
      items: { type: Array, default: [] }
    },
    methods: {
      getClassName (el="",mod='') {
        return this.$parent.getClassName(el,mod)
      }
    }
  }
</script>
