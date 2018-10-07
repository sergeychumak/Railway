<template>
  <a
    v-if="to"
    :class="classes"
  >
    <slot></slot>
  </a>
  <button
    v-else
    :class="classes"
  >
    <slot></slot>
  </button>
</template>
<script>
  import { oneOf } from '../helping';
  const prefix = 'railwayButtonDefault';
  export default {
    name: 'railway-button',
    props: {
      type: {
        validator (value) {
          return oneOf(value, ['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
        },
        default: 'default'
      },
      to: {
        type: [Object, String]
      }
    },
    computed: {
      classes () {
        return [
          `${prefix}`,
          `${prefix}__${this.type}`,
          {
            // [`${prefix}-long`]: this.long,
            // [`${prefix}-${this.shape}`]: !!this.shape,
            // [`${prefix}-${this.size}`]: this.size !== 'default',
            // [`${prefix}-loading`]: this.loading != null && this.loading,
            // [`${prefix}-icon-only`]: !this.showSlot && (!!this.icon || !!this.customIcon || this.loading),
            // [`${prefix}-ghost`]: this.ghost
          }
        ];
      }
    },
    // props: {
    //   site: { type: String, default: "default" },
    //   href: { type: Boolean, default: false },
    //   color:  { type: String, default: "white" }
    // },
    // data: function(){
    //   return {
    //     prefix: 'railway',
    //     className : 'button' + this.site.charAt(0).toUpperCase() + this.site.slice(1).toLowerCase(),
    //     type: this.href ? 'href' : 'button'
    //   }
    // },
    // computed: {
    //   classObject () {
    //     return [
    //       this.prefix,
    //       this.className,
    //       this.className + '_color_' + this.color,
    //       { 'active': this.active },
    //       { 'loading': this.loading },
    //       { 'disabled': this.disabled },
    //       this.size
    //     ]
    //   }
    // },
    // methods: {
    //   clickHandler (e) {
    //     this.$emit('click', e)
    //   }
    // }
  }
</script>
