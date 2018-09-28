import './styles/style.scss'

import Button from './components/Button.vue'
import Test from './components/Test.vue'
import Grid from './components/Grid.vue'
import Breadcrumb from './components/Breadcrumb.vue'
import Menu from './components/Menu/Menu.vue'
import MenuItems from './components/Menu/Items'

const components = {
  Button,
  Test,
  Grid,
  Breadcrumb,
  Menu,MenuItems

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
