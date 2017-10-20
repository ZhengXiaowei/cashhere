<template>
  <div class="page has-navbar" v-nav="{title:'帮助中心',showBackButton:true}">
    <div class="page-content help-page">
      <tab :line-width=2 active-color='#ff5533' v-model="activeIndex">
        <tab-item class="vux-center" :selected="activeText === item" v-for="(item, index) in lists" @click="activeText = item" :key="index">{{item}}</tab-item>
      </tab>
      <swiper class="help-swiper" v-model="activeIndex" :height="V+'px'" :show-dots="false">
        <swiper-item v-for="(item2, index2) in lists" :key="index2">
          <div class="tab-swiper vux-center">
            <group class="help-list">
              <cell title="为什么会读取联系人失败？" is-link></cell>
              <cell title="如何更换收款银行卡？" is-link></cell>
              <cell title="手机运营商失败的原因有哪些？" is-link></cell>
              <cell title="审核通过后多久打款？" is-link></cell>
              <cell title="审核被拒绝的原因一般有哪些？" is-link></cell>
              <cell title="借款额度是多少？" is-link></cell>
            </group>
          </div>
        </swiper-item>
        <div class="contact-box">
          <p>联系我们</p>
          <p>0571-28218552</p>
        </div>
      </swiper>
      <div class="bg"></div>
    </div>
  </div>
</template>

<script>
import { Tab, TabItem, Swiper, SwiperItem, Group, Cell } from 'vux'

const list = () => ['借款相关', '还款相关', '认证相关', '常见问题']
export default {
  components: {
    Tab,
    TabItem,
    Swiper,
    SwiperItem,
    Group,
    Cell
  },
  computed: {
    V () {
      return window.innerHeight - 88
    }
  },
  data () {
    return {
      lists: list(),
      activeText: '借款相关',
      activeIndex: 0
    }
  }
}
</script>

<style lang="stylus">
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.tab-swiper
  background-color #fff

.help-list
  font-size 14px
  color $text-label-color

  .weui-cells
    margin-top 0

    .weui-cell
      height 46px

.help-swiper
  .contact-box
    position absolute
    bottom 52px
    width 100%
    font-size 12px
    color $text-label-color
    text-align center
    line-height 18px

.help-page
  .bg
    bg-image('bg_bolang')
    height 32px
    position absolute
    bottom 0
    width 100%
</style>
