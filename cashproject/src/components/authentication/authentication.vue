<template>
  <div class="page has-navbar has-tabbar" v-tabbar-menu-index="1">
    <von-header theme="light">
      <span slot="title">认证</span>
    </von-header>
    <div class="page-content">
      <div class="top-header">
        <div class="auth-pay__money t-c">
          <p class="max_money">0.00</p>
          <p class="max_money__text">我的额度</p>
        </div>
      </div>
      <div class="middle-content">
        <div class="middle-title">请务必填写真实信息，虚假信息将影响借贷申请！</div>
        <div class="middle-menu__list flex-box">
          <div class="menu-item flex-box" :class="{'auth':infoAuth}" @click="authPage('userAuth')">
            <i class="icon-shimingrenzheng"></i>
            <p>个人信息</p>
            <p class="auth-status">{{infoAuth ? '已填写':'未填写'}}</p>
          </div>
          <div class="menu-item flex-box" :class="{'auth':contactAuth}" @click="authPage('urgentAuth')">
            <i class="icon-bangdingshouji"></i>
            <p>紧急联系人</p>
            <p class="auth-status">{{contactAuth ? '已填写':'未填写'}}</p>
          </div>
          <div class="menu-item flex-box" :class="{'auth':bankAuth}" @click="authPage('bankAuth')">
            <i class="icon-yinhangqiashezhi"></i>
            <p>收款银行卡</p>
            <p class="auth-status">{{bankAuth ? '已填写':'未填写'}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infoAuth: true,
      contactAuth: false,
      bankAuth: true
    }
  },
  methods: {
    authPage (path) {
      this.$router.push({
        path: `/${path}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.top-header
  height 133px
  bg-image('bg_bolang2')

  .auth-pay__money
    padding 34px 0 0px
    color #fff

    .max_money
      margin-bottom 18px
      font-size 35px

    .max_money__text
      font-size 14px

.middle-content
  margin-top 12px
  background #fff
  font-size 14px

  .middle-title
    padding 11px 17px
    line-height 20px
    color $text-notic-color
    border-color(bottom, #f6f6f6)

  .middle-menu__list
    justify-content center
    align-items center
    text-align center

    .menu-item
      flex 1
      height 130px
      flex-direction column
      justify-content space-around
      padding 34px 0
      position relative

      i
        font-size 32px
        color $text-notic-color

      p
        font-size 16px
        color $text-label-color

      .auth-status
        position absolute
        top 15px
        right 5px
        font-size 12px
        line-height 15px
        padding 2px 6px
        background #d5d5d5
        color #fff
        border-radius 20px
        text-align center

      &.auth
        i
          color $theme-color

        .auth-status
          color #fff
          background $theme-color

      &:not(:last-child)
        border-color(right, #f6f6f6)
</style>
