<template>
  <div class="page" v-nav="{hideNavbar:true}">
    <div class="page-content login-page">
      <div class="logo-box flex-box">
        <img src="./logo.png" alt="这里贷" />
      </div>
      <div class="form-box">
        <group>
          <x-input class="middle-input" text-align="left" :show-clear="showClear" type="tel" v-model="userInfo.phone" placeholder="请输入本人手机号">
          </x-input>
          <x-input class="middle-input" text-align="left" :show-clear="showClear" :type="toggleType" v-model="userInfo.password" placeholder="请输入登录密码">
            <div slot="right" class="toggle-type">
              <i class="icon" :class="[showPassword ? 'icon-see' : 'icon-unsee']" @click="toggleTypeMethods"></i>
            </div>
          </x-input>
        </group>
        <p class="form-forget t-r" @click="forget">忘记密码?</p>
      </div>
      <submit-button class="login-btn" text="登录" height="50" @click="login"></submit-button>
      <div class="other-login__way flex-box">
        <p>微信登录</p>
        <p @click="register">快速注册</p>
      </div>
      <div class="contact-us">
        <p>联系我们</p>
        <p>0571-28218552</p>
      </div>
      <div class="page-bg__bottom"></div>
    </div>
  </div>
</template>

<script>
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
      showClear: false,
      toggleType: 'password',
      showPassword: false,
      userInfo: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    toggleTypeMethods () {
      this.showPassword = !this.showPassword
      this.showPassword ? this.toggleType = 'text' : this.toggleType = 'password'
    },
    login () {
      // do login methods
      window.$toast.show('用户不存在', 2000)
    },
    forget () {
      this.$router.forward('/forget')
    },
    register () {
      this.$router.forward('/register')
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.page .page-content.login-page
  background #fff

  .logo-box
    justify-content center
    align-items center

    img
      margin 45px 0 30px
      width 113px
      height 113px

  .login-btn
    margin-top 42px

  .other-login__way
    justify-content space-between
    align-items center
    font-size 18px
    color $theme-color
    margin-top 18px
    padding 0 60px

  .contact-us
    position absolute
    bottom 25px
    width 100%
    font-size 12px
    color #160c0a
    text-align center
    line-height 18px

  .form-box
    margin 0 53px

    .weui-cells:before
      border-top none

    .weui-cells:after
      border-bottom none

    .middle-input
      padding 10px 0
      border-bottom 1px solid #d5d5d5

      .weui-input
        font-size 16px
        color $text-label-color

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

      &:last-child
        margin-top 30px

      &:before
        border-top none

    .form-forget
      font-size 12px
      color $theme-color
      margin 6px 0

  .page-bg__bottom
    bg-image('bg_bolang')
    position absolute
    bottom 0
    left 0
    right 0
    height 30px
</style>
