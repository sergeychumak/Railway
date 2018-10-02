<template>
    <button v-if="type==='button'" :class="classObject"><slot/></button>
    <a v-else-if="type==='href'" :class="classObject"><slot/></a>
  <!--<a :class="classObject"><slot/>
  </a>-->

  <!--<a class="button">Anchor</a>-->


</template>
<script>
  export default {
    name: 'railway-button',
    props: {
      site: { type: String, default: "default" },
      href: { type: Boolean, default: false },
      color:  { type: String, default: "white" }
    },
    data: function(){
      return {
        prefix: 'railway',
        className : 'button' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase(),
        type: this.href ? 'href' : 'button'
      }
    },
    computed: {
      classObject () {
        return [
          this.prefix,
          this.className,
          this.className + '_color_' + this.color,
          { 'active': this.active },
          { 'loading': this.loading },
          { 'disabled': this.disabled },
          this.size
        ]
      }
    },
    methods: {
      clickHandler (e) {
        this.$emit('click', e)
      }
    }
  }
</script>
