<template>
  <div class="page has-navbar" v-nav="{title:'注册',showBackButton:true}">
    <div class="page-content register-box">
      <group>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" type="tel" v-model="userInfo.phone" placeholder="请输入手机号">
        </x-input>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" type="text" v-model="userInfo.piccode" placeholder="请输入图形验证码">
          <div class="code-pic__box" slot="right">
            <img src="./vcode.png" alt="图形验证码" />
          </div>
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
      <submit-button class="register-btn" text="注册" height="50" @click="register"></submit-button>
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
        password: '',
        piccode: ''
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
    register () {
      // register methods
      let router = this.$router
      let options = {
        components: {
          'showResult': {
            template: `<div class="result t-c">
              <div class="result-icon">
                <i class="succ"></i>
                <span class="result-notice">恭喜您注册成功！</span>
              </div>
              <div class="notice-btn__box"><button class="notice-btn"
                  @click="doAction">去登录</button></div>
            </div>`,
            methods: {
              doAction () {
                this.$parent.hide()
                router.back('/login')
              }
            }
          }
        }
      }
      window.$popup.fromTemplate('<show-result></show-result>', options).show()
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

  .code-pic__box img
    width 90px
    height 38px

.register-box .register-btn
  margin-top 50px

.notice-btn__box
  margin-top 20px
  text-align center

  .notice-btn
    border none
    width 80%
    height 40px
    color #fff
    border-radius 20px
    background #ff5532
    box-shadow 0px 0px 6px 3px rgba(255, 85, 50, 0.2)

.result-icon
  .succ
    bg-image('icon_succed-of-register')
    width 48px
    height 48px
    display block
    margin 15px auto

  span.result-notice
    font-size 16px
    color $text-label-color
    font-weight 300
</style>
