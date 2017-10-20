<template>
  <div class="page" v-nav="{hideNavbar:true}" v-tabbar="{'menus': menus, menuColor: '#666', activeMenuColor: '#ff5632', onMenuClick: menuClicked}">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        {
          iconOn: 'icon-dkw_jiekuan',
          iconOff: 'icon-dkw_jiekuan',
          text: '借款',
          path: '/index/home'
        },
        {
          iconOn: 'icon-renzheng',
          iconOff: 'icon-renzheng',
          text: '认证',
          path: '/index/auth'
        },
        {
          iconOn: 'icon-dkw_wode',
          iconOff: 'icon-dkw_wode',
          text: '我的',
          path: '/index/user'
        }
      ]
    }
  },
  methods: {
    menuClicked (menuIndex) {
      // console.log(menuIndex)
    }
  },
  beforeDestroy () {
    window.$tabbar.$emit('hideTabbar')
  }
}
</script>
