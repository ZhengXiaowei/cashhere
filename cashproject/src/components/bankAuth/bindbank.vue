<template>
  <div class="page has-navbar" v-nav="{title:'绑定银行卡',showBackButton:true}">
    <div class="page-content bind-page">
      <group label-width="60px" label-margin-right="25px" label-align="left">
        <x-input class="middle-input" text-align="left" title="发卡行：" readonly :show-clear="showClear" type="text" v-model="bindInfo.bank"></x-input>
        <x-input class="middle-input" text-align="left" title="手机号：" :show-clear="showClear" type="tel" v-model="bindInfo.phone" placeholder="银行预留手机号"></x-input>
      </group>
      <submit-button text="下一步" height="50" class="bindbtn" @click="next"></submit-button>
    </div>
  </div>
</template>

<script>
// TODO:弹窗为定义
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
        bank: '中国工商银行',
        phone: ''
      }
    }
  },
  methods: {
    next () {
      this.$router.forward('/bankList')
    }
  }
}
</script>

<style lang="stylus" scoped>
.bind-page
  .bindbtn
    margin-top 50px
</style>
