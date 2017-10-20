<template>
  <div class="page has-navbar" v-nav="{title:'设置',showBackButton:true}">
    <div class="page-content">
      <group>
        <cell class="setting-item" title="更换手机号" :value="userInfo.phone" :link="{path:'/changetel'}"></cell>
        <cell class="setting-item" title="修改密码" :link="{path:'/changepsd'}"></cell>
        <cell class="setting-item" title="版本信息" :value="'已是最新版本：'+version"></cell>
      </group>
      <div class="exit">退出登录</div>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      userInfo: {
        phone: '13056851256'
      },
      version: 'V.1.0'
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.setting-item
  height 46px
  font-size 14px
  color $text-label-color

.exit
  height 46px
  line-height 46px
  font-size 16px
  color $text-label-color
  background #fff
  text-align center
  margin-top 20px
</style>
