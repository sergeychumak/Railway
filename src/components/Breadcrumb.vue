<template>
  <div>
    <nav :class="classObject">
      <ul>
        <li v-for="item in list">
          <a :href="item.url">{{item.name}}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    name: 'railway-breadcrumb',
    props: {
      site: { type: String, default: "default" },
      list: {
        type: Array,
        default: function () { return [] }
      },
      centered : { type: Boolean, default: false },
      right : { type: Boolean, default: false },
      small : { type: Boolean, default: false },
      medium : { type: Boolean, default: false },
      large : { type: Boolean, default: false },
    },
    computed: {
      classObject () {
        return [
          'railway',
          'breadcrumb' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase(),
          { 'centered': this.centered },
          { 'right': this.right },
          { 'small': this.small },
          { 'medium': this.medium },
          { 'large': this.large }
        ]
      }
    },
  }
</script>
