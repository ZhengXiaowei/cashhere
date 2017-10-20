<template>
  <div class="page has-navbar" v-nav="{title:'个人信息',showBackButton:true,showMenuButton:true,menuButtonText:'保存',onMenuButtonClick:auth}">
    <div class="page-content authinfo-content">
      <top-notice show-text="身份认证信息保存后将无法修改，请务必保持正确！"></top-notice>
      <group label-width="60px" label-margin-right="25px" label-align="left">
        <x-input class="middle-input" text-align="left" :readonly='true' title="姓名" :show-clear="showClear" type="text" v-model="authInfo.name">
        </x-input>
        <x-input class="middle-input" text-align="left" :readonly='true' title="身份证" :show-clear="showClear" type="text" v-model="authInfo.cardCode">
        </x-input>
        <x-address class="middle-input" title="现居城市" v-model="address" raw-value :list="addressData" value-text-align="left" @on-shadow-change="onShadowChange" @on-hide="logHide" @on-show="logShow" cancel-text="请选择您现居城市" placeholder="请选择您现居城市" :show.sync="showAddress"></x-address>
        <x-input class="middle-input" text-align="left" title="详细地址" :show-clear="showClear" type="text" v-model="authInfo.address" placeholder="如：西城区城坊街25号"></x-input>
        <x-input class="middle-input" text-align="left" title="单位名称" :show-clear="showClear" type="text" v-model="authInfo.partname" placeholder="(选填)"></x-input>
        <x-input class="middle-input" text-align="left" title="单位地址" :show-clear="showClear" type="text" v-model="authInfo.partaddress" placeholder="输入工作地址(选填)"></x-input>
        <x-input class="middle-input" text-align="left" title="单位电话" :show-clear="showClear" type="text" v-model="authInfo.partphone" placeholder="(选填)"></x-input>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, XAddress, ChinaAddressV4Data, XInput } from 'vux'
import TopNotice from 'base/topNotice/topnotice'

export default {
  components: {
    TopNotice,
    Group,
    XAddress,
    XInput
  },
  data () {
    return {
      addressData: ChinaAddressV4Data,
      showAddress: false,
      showClear: false,
      address: ['浙江省', '杭州市', '滨江区'],
      authInfo: {
        name: '',
        cardCode: '',
        address: '',
        qqnum: '',
        partname: '',
        partaddress: '',
        partphone: ''
      }
    }
  },
  methods: {
    auth () {
      // post auth info
      this.$router.back('/index/auth')
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.middle-input
  height 44px
  color #454545

  input::-webkit-input-placeholder
    color $placeholder-color-dark

.authinfo-content .vux-cell-value
  color $text-label-color
</style>
