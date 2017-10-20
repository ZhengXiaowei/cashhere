<template>
  <div class="page has-tabbar" v-tabbar-menu-index="2">
    <div class="page-content">
      <div class="top-user__box">
        <div class="user-msg flex-box">
          <i class="msg-icon" @click="message"></i>
        </div>
        <div class="user-img__box flex-box">
          <img src="./default.png" alt="">
          <div class="user-info flex-box" v-if="token">
            <p class="user-name">钱多多</p>
            <p class="user-phone">156****1250</p>
          </div>
          <div class="user-info flex-box" v-else @click="login">
            <p class="user-name">登录/注册</p>
          </div>
        </div>
      </div>
      <div class="middle-menu__list">
        <group>
          <cell class="item-cells" title="借款记录" :link="{path:'/loanList'}">
            <img slot="icon" class="cell-icon" src="./icon_Borrowed.png" alt="">
          </cell>
          <cell class="item-cells" title="还款流水" :link="{path:'/repayflow'}">
            <img slot="icon" class="cell-icon" src="./icon_repayments.png" alt="">
          </cell>
          <cell class="item-cells" title="银行卡" :link="{path:'/myBanks'}">
            <img slot="icon" class="cell-icon" src="./icon_union-card.png" alt="">
          </cell>
        </group>
        <group>
          <cell class="item-cells" title="帮助中心" :link="{path:'/help'}">
            <img slot="icon" class="cell-icon" src="./icon_question.png" alt="">
          </cell>
          <cell class="item-cells" title="品牌中心" :link="{path:'/branch'}">
            <img slot="icon" class="cell-icon" src="./icon_Brand.png" alt="">
          </cell>
        </group>
        <group>
          <cell class="item-cells" title="设置" :link="{path:'/setting'}">
            <img slot="icon" class="cell-icon" src="./icon_set.png" alt="">
          </cell>
        </group>
      </div>
    </div>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      token: ''
    }
  },
  methods: {
    login () {
      this.$router.forward('/login')
    },
    message () {
      this.$router.forward('/message')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.top-user__box
  background $theme-color
  height 138px

  .user-msg
    padding 10px 14px
    justify-content flex-end
    align-items center

    .msg-icon
      bg-image('icon_news')
      width 25px
      height 25px
      display block

  .user-img__box
    padding 0 24px
    justify-content flex-start
    align-items center

    img
      width 64px
      height 64px

    .user-info
      font-size 18px
      color #fff
      flex-direction column
      justify-content center
      align-items flex-start
      margin-left 17px

      .user-phone
        font-size 14px
        color #f6d1d1
        margin-top 10px

.middle-menu__list
  .item-cells
    height 46px
    font-size 14px
    color $text-label-color
    align-items center

  .cell-icon
    width 25px
    height 25px
    margin-right 10px
    display block
</style>
