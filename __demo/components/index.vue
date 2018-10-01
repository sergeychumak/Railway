<template>
  <div class="railwaySystem">
    <div class="headerBlockWrap">
      <railway-grid grid_1_1>
        <div class="headerBlockWrap__content">
          <span>RailWay v.0.0.1</span> wagons of components
        </div>
      </railway-grid>
    </div>
    <div class="contentBlockWrap">
        <div class="contentBlockWrapAside">
          <div class="contentBlockWrapAside__content">
            <railway-menu :items="items" @clickHandler="clickLink"></railway-menu>
          </div>
        </div>
        <div class="contentBlockWrapContent">
          <router-view class="contentBlockWrapContent__content"></router-view>
        </div>
    </div>
  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        items: [
          {name: 'О системе'},
          {name: 'Разрабочики'},
          {
            name: 'Компоненты', showChilds: true, childs: [
              {name: 'Button', to: "DemoButton"},
              {name: 'Grid', to: "DemoGrid"},
              {name: 'Breadcrumb'},
              {name: 'Menu'}
            ]
          },
          {name: 'Элемент 10'},
          {name: 'Элемент 1'},
          {
            name: 'Элемент 1', childs: [
              {name: 'Элемент 1.0'},
              {
                name: 'Элемент 1.1', childs: [
                  {name: 'Элемент 1.0'},
                  {name: 'Элемент 1.1'},
                  {name: 'Элемент 1.2'}
                ]
              },
              {name: 'Элемент 1.2'}
            ]
          },
          {name: 'Элемент 10'},
          {name: 'Элемент 1'}
        ]
      }
    },
    methods: {
      clickLink: function (item) {
        console.log(1)
        console.log(item)
        this.$router.push({name: item.to})
      }
    }
  }
</script>
