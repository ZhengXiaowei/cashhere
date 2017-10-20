<template>
  <div class="page has-navbar" v-nav="{title:'个人信息',showBackButton:true}">
    <div class="page-content">
      <top-notice show-text="身份认证信息保存后将无法修改，请务必保持正确！"></top-notice>
      <div class="middle-content flex-box">
        <div class="auth-item">
          <div class="auth-item__pic flex-box" @click="showNotice('showCardZ')">
            <img :class="{'bank-car__z':showCardZ}" src="./pic_idz.png" alt="二代身份证正面">
            <span class="card-arrow card_z" v-show="showCardZ"></span>
          </div>
          <p>二代身份证正面</p>
        </div>
        <div class="auth-item">
          <div class="auth-item__pic flex-box" @click="showNotice('showCardB')">
            <img :class="{'bank-car__b':showCardB}" src="./pic_idb.png" alt="二代身份证反面">
            <span class="card-arrow card_b" v-show="showCardB"></span>
          </div>
          <p>二代身份证反面</p>
        </div>
        <div class="auth-item" style="margin-top:40px">
          <div class="auth-item__pic flex-box">
            <img src="./pic_idl.png" alt="人脸识别认证">
          </div>
          <p>人脸识别认证</p>
        </div>
      </div>
      <submit-button class="auth-btn" text="下一步" height="50" @click="next"></submit-button>
      <div class="mask" v-show="showCardZ">
        <div class="notice-card__z">
          <img src="./pic_idzm.png" alt="">
          <span class="notice-card__know" @click="uploadZ"></span>
        </div>
      </div>
      <div class="mask" v-show="showCardB">
        <div class="notice-card__z">
          <img src="./pic_idbm.png" alt="">
          <span class="notice-card__know" @click="uploadB"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubmitButton from 'base/submitButton/submitbutton'
import TopNotice from 'base/topNotice/topnotice'

export default {
  components: {
    SubmitButton,
    TopNotice
  },
  data () {
    return {
      showCardZ: false,
      showCardB: false
    }
  },
  methods: {
    showNotice (type) {
      this[type] = true
      // window.$backdrop.show()
    },
    uploadZ () {
      this.showCardZ = false
      // 上传身份证正面照
    },
    uploadB () {
      this.showCardB = false
      // 上传身份证反面照
    },
    next () {
      this.$router.push('/userauth_info')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.middle-content
  padding 0 30px
  justify-content space-between
  align-items center
  flex-flow row
  flex-wrap wrap
  margin-top 20px

  .auth-item
    width 45%
    text-align center
    font-size 14px
    color $text-label-color
    position relative

    .auth-item__pic
      height 96px
      justify-content center
      align-items center
      border 1px dashed #d5d5d5
      border-radius 5px

      img
        width 50%

      .bank-car__z, .bank-car__b
        position absolute
        z-index 999

    p
      margin-top 15px

.page-content .auth-btn
  margin-top 50px

.mask
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background rgba(6, 5, 11, 0.5)
  z-index 99

  .notice-card__z
    width 80%
    position absolute
    top 230px
    left 50%
    margin-left -40%

    img
      width 100%

    .notice-card__know
      background url('./pic_Ikonw.png') no-repeat
      background-size 100% 100%
      display block
      width 105px
      height 42px
      margin 70px auto 0

.card-arrow
  position absolute
  width 25px
  height 60px
  // top: 185px;
  bottom -10px
  z-index 999

  // background: #fff;
  &.card_z
    bg-image('pic_direct')
    // left: calc(24% + 20px);
    right 20px

  &.card_b
    bg-image('pic_direct2')
    // right: calc(24% + 20px);
    left 30px
</style>
