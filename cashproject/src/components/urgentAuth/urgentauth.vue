<template>
  <div class="page has-navbar" v-nav="{title:'紧急联系人',showBackButton:true,showMenuButton:true,menuButtonText:'保存',onMenuButtonClick:urgentAuth}">
    <div class="page-content authinfo-content">
      <top-notice show-text="信息需要真实有效，否则导致借款失败！"></top-notice>
      <group label-width="80px" label-margin-right="25px" label-align="left">
        <popup-picker class="middle-input" title="与本人关系" :data="relations1" v-model="relation1" value-text-align="left" cancel-text="选择与本人的关系" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="选择与本人的关系"></popup-picker>
        <x-input class="middle-input" text-align="left" title="姓名" :show-clear="showClear" type="text" v-model="relationArr.name1">
        </x-input>
        <x-input class="middle-input" text-align="left" title="电话" :show-clear="showClear" type="tel" v-model="relationArr.phone1">
          <div slot="right">
            <i class="tel-icon"></i>
          </div>
        </x-input>
      </group>
      <group label-width="80px" label-margin-right="25px" label-align="left">
        <popup-picker class="middle-input" title="与本人关系" :data="relations2" v-model="relation2" value-text-align="left" cancel-text="选择与本人的关系" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="选择与本人的关系"></popup-picker>
        <x-input class="middle-input" text-align="left" title="姓名" :show-clear="showClear" type="text" v-model="relationArr.name2">
        </x-input>
        <x-input class="middle-input" text-align="left" title="电话" :show-clear="showClear" type="tel" v-model="relationArr.phone2">
          <div slot="right">
            <i class="tel-icon"></i>
          </div>
        </x-input>
      </group>
    </div>
  </div>
</template>

<script>
import TopNotice from 'base/topNotice/topnotice'
import { Group, XInput, PopupPicker } from 'vux'

export default {
  components: {
    TopNotice,
    Group,
    XInput,
    PopupPicker
  },
  data () {
    return {
      showClear: false,
      relations1: [['父亲', '母亲', '配偶']],
      relations2: [['父亲', '亲属', '母亲', '同事', '朋友']],
      relation1: ['父亲'],
      relation2: ['母亲'],
      relationArr: {
        name1: '',
        phone1: '',
        name2: '',
        phone2: ''
      }
    }
  },
  methods: {
    urgentAuth () {
      this.$router.back('/index/auth')
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    onChange (val) {
      console.log('val change', val)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.middle-input
  .tel-icon
    bg-image('icon_telephone')
    background-size contain
    width 20px
    height 24px
    display block
</style>

