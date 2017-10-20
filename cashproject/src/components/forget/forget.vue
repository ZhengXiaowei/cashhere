<template>
  <div class="page">
    <div class="page-content forget-box">
      <group>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" type="tel" v-model="userInfo.phone" placeholder="请输入手机号">
        </x-input>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" type="text" v-model="userInfo.code" placeholder="请输入手机验证码">
          <div class="code-btn__box" slot="right">
            <code-button @click="getCode"></code-button>
          </div>
        </x-input>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" :type="toggleType" v-model="userInfo.password" placeholder="请输入6-20位数字或字符组成密码">
          <div slot="right" class="toggle-type">
            <i class="icon" :class="[showPassword ? 'icon-see' : 'icon-unsee']" @click="toggleTypeMethods"></i>
          </div>
        </x-input>
      </group>
      <submit-button class="forget-btn" text="确定" height="50" @click="forget"></submit-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'
import CodeButton from 'base/codeButton/codebutton'

export default {
  components: {
    Group,
    XInput,
    SubmitButton,
    CodeButton
  },
  data () {
    return {
      showClear: false,
      toggleType: 'password',
      showPassword: false,
      userInfo: {
        phone: '',
        code: '',
        password: ''
      }
    }
  },
  methods: {
    toggleTypeMethods () {
      this.showPassword = !this.showPassword
      this.showPassword ? this.toggleType = 'text' : this.toggleType = 'password'
    },
    getCode () {
      // get code
    },
    forget () {
      // forget methods
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.middle-input
  height $input-height

  .weui-input
    font-size 14px
    color $text-label-color

    &::-webkit-input-placeholder
      color $placeholder-color-dark

  .toggle-type
    .icon
      width 24px
      height 18px
      display block
      margin-right 7px

    .icon-see
      bg-image('see')
      background-size contain

    .icon-unsee
      bg-image('hide')
      background-size contain
      height 15px

.forget-box .forget-btn
  margin-top 50px
</style>
