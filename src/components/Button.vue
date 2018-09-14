<template>
  <div
    :class="classObject"
    @click="clickHandler"
  >
    <slot/>
  </div>
</template>
<script>
  export default {
    name: 'railway-button',
    props: {
      active: { type: Boolean, default: false },
      loading: { type: Boolean, default: false },
      disabled: { type: Boolean, default: false },
      type: { type: String },
      size: { type: String }
    },
    computed: {
      classObject () {
        return [
          'railway button',
          { 'active': this.active },
          { 'loading': this.loading },
          { 'disabled': this.disabled },
          this.type,
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
