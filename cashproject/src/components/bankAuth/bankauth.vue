<template>
  <div class="page has-navbar" v-nav="{title:'收款银行卡',showBackButton:true}">
    <div class="page-content bankauth">
      <p class="title-notice">请绑定持卡人本人的银行卡</p>
      <group label-width="60px" label-margin-right="25px" label-align="left">
        <x-input class="middle-input" text-align="left" title="持卡人：" :show-clear="showClear" type="text" v-model="bindInfo.name" placeholder="请输入持卡人姓名">
          <div slot="right">
            <i class="notice-icon"></i>
          </div>
        </x-input>
        <x-input class="middle-input" text-align="left" title="卡号：" :show-clear="showClear" type="text" v-model="bindInfo.cardno" placeholder="请输入银行卡号"></x-input>
      </group>
      <submit-button text="下一步" height="50" class="bindbtn" @click="next"></submit-button>
    </div>
  </div>
</template>

<script>
// TODO:重定向回来的页面 缓存问题
import { Group, XInput } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'

export default {
  components: {
    Group,
    XInput,
    SubmitButton
  },
  data () {
    return {
      bindInfo: {
        name: '',
        cardno: ''
      }
    }
  },
  methods: {
    next () {
      this.$router.forward('/bindbank')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.bankauth
  .title-notice
    padding 13px 15px 6px
    font-size 14px
    color $text-label-color

  .notice-icon
    extend-click()
    bg-image('icon_reminder')
    width 16px
    height 16px
    display block

  .bindbtn
    margin-top 46px
</style>

