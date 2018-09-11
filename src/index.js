import Button from './components/Button.vue'

const components = {
  Button
}

const install = function (Vue, opts = {}) {
  Object.values(components).forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign({}, components, {install})  // eslint-disable-line no-undef
