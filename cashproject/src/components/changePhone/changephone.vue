<template>
  <div class="page has-navbar" v-nav="{title:'更换手机号',showBackButton:true}">
    <div class="page-content page-change">
      <div class="checkphone" ref="step1" v-show="steps.step1">
        <p class="nowphone">您现在的手机号是：
          <i>183****0123</i>
        </p>
        <group>
          <x-input class="inputbox" text-align="left" :show-clear="showClear" type="tel" v-model="userInfo.newphone" placeholder="请输入新的手机号"></x-input>
        </group>
        <p class="notice">一个手机号只能作为一个账户的登录名，更换手机之后，请用更换的手机号作为登录名</p>
        <submit-button text="下一步" height="50" class="changebtn" @click="next"></submit-button>
      </div>
      <div class="setphone" ref="step2" v-show="steps.step2">
        <group>
          <x-input class="inputbox" text-align="left" readonly :show-clear="showClear" type="tel" v-model="userInfo.newphone" placeholder="请输入手机号">
            <div class="code-btn__box" slot="right">
              <code-button @click="getCode"></code-button>
            </div>
          </x-input>
          <x-input class="inputbox" text-align="left" :show-clear="showClear" type="text" v-model="userInfo.code" placeholder="请输入手机验证码"></x-input>
        </group>
        <p class="notice">一个手机号只能作为一个账户的登录名，更换手机之后，请用更换的手机号作为登录名</p>
        <submit-button text="确定" height="50" class="changebtn" @click="change"></submit-button>
      </div>
    </div>
    <confirm class="checkpwd" v-model="show" show-input ref="checkpwd" title="请先进行登录密码验证" @on-cancel="onCancel" @on-confirm="onConfirm">
    </confirm>
  </div>
</template>

<script>
import { Group, XInput, Confirm } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'
import CodeButton from 'base/codeButton/codebutton'

export default {
  components: {
    Group,
    XInput,
    Confirm,
    SubmitButton,
    CodeButton
  },
  data () {
    return {
      showClear: false,
      show: false,
      steps: {
        step1: true,
        step2: false
      },
      userInfo: {
        newphone: '',
        code: ''
      }
    }
  },
  methods: {
    next () {
      this.show = true
    },
    onConfirm () {
      // 验证登录密码
      console.log('ok')
      this.__changeSteps('step2')
    },
    onCancel () {
      console.log('cancel')
    },
    getCode () {

    },
    change () {
      // 更换手机
    },
    __changeSteps (step) {
      for (let i in this.steps) {
        i === step ? this.steps[i] = true : this.steps[i] = false
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'

.checkphone
  .nowphone
    font-size 12px
    color $text-label-color
    padding 14px 10px 4px

    i
      font-style normal
      color $theme-color

.page-change
  .changebtn
    margin-top 50px

  .inputbox
    height 46px

  .notice
    font-size 12px
    color $text-notic-color
    line-height 14px
    padding 7px 10px

.checkpwd
  color $text-label-color

  .weui-dialog
    border-radius 10px

    .weui-dialog__title, .weui-dialog__ft
      font-size 14px

    .weui-dialog__btn_primary
      color $theme-color
</style>
