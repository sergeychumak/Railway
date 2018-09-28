<template>
  <aside :class="getClassName()" @click="clickHandler">
    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Dashboard</a></li>
    </ul>
    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Dashboard</a></li>
    </ul>
    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Dashboard</a></li>
    </ul>
    <template v-for="item in testData">
      <p :class="getClassName('label')">
        {{item.name}}
      </p>
      <ul :class="getClassName('list')">
        <li v-for="itemItems in item.items" :class="getClassName('listItem')">
          <a :class="getClassName('listItemLink')">
            {{itemItems.name}}
          </a>
        </li>
      </ul>
    </template>

    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Dashboard</a></li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Customers</a></li>
    </ul>
    <p :class="getClassName('label')">General</p>
    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Dashboard</a></li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Customers</a></li>
    </ul>
    <p :class="getClassName('label')">Administration</p>
      <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Team Settings</a></li>
      <li :class="getClassName('listItem')">
        <a :class="getClassName('listItemLink')">Manage Your Team</a>
        <ul :class="getClassName('list')">
          <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink','active')">Members</a></li>
          <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Plugins</a></li>
          <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Add a member</a></li>
        </ul>
      </li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Invitations</a></li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Cloud Storage Environment Settings</a></li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Authentication</a></li>
    </ul>

    <p :class="getClassName('label')">Transactions</p>
    <ul :class="getClassName('list')">
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Payments</a></li>
      <li :class="getClassName('listItem')">
        <a :class="getClassName('listItemLink')">Transfers</a>
        <ul :class="getClassName('list')">
          <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Members</a></li>
          <li :class="getClassName('listItem')">
            <a :class="getClassName('listItemLink')">Plugins</a>
            <ul :class="getClassName('list')">
              <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Members</a></li>
              <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Plugins</a></li>
              <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Add a member</a></li>
            </ul>
          </li>
          <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Add a member</a></li>
        </ul>
      </li>
      <li :class="getClassName('listItem')"><a :class="getClassName('listItemLink')">Balance</a></li>
    </ul>
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
          { name: 'Элемент 0' },
          { name: 'Элемент 1' },
          { name: 'Элемент 2' }
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
