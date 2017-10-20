<template>
  <div class="page has-navbar" v-nav="{title:'银行卡',showBackButton:true}">
    <div class="page-content">
      <div class="bank-list">
        <bank-item v-for="(item,index) in bankList" :key="index" :bank-info="item" @click="unbind"></bank-item>
      </div>
      <div class="bank-add">
        <group>
          <cell class="item-cells" title="添加银行卡" is-link>
            <img slot="icon" class="cell-icon" src="./icon_adds.png" alt="">
          </cell>
        </group>
      </div>
    </div>
    <popup v-model="show">
      <div class="unbind-bank">
        解除绑定
      </div>
    </popup>
  </div>
</template>

<script>
import { Group, Cell, Popup } from 'vux'
import BankItem from 'base/bankItem/bankitem'

export default {
  components: {
    BankItem,
    Group,
    Cell,
    Popup
  },
  data () {
    return {
      show: false,
      bankList: [{
        id: 1,
        bankName: '中国工商银行',
        bankType: '储蓄卡',
        bankNo: '6222654385325989764',
        bankBg: require('./bg_unionpay.png')
      }, {
        id: 2,
        bankName: '中国工商银行',
        bankType: '储蓄卡',
        bankNo: '6222654385325989757',
        bankBg: require('./bg_unionpay.png')
      }, {
        id: 3,
        bankName: '中国工商银行',
        bankType: '储蓄卡',
        bankNo: '6222654385325989724',
        bankBg: require('./bg_unionpay.png')
      }]
    }
  },
  methods: {
    unbind (id) {
      console.log(id)
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.bank-list
  margin-top 12px

.bank-add
  .item-cells
    height 46px

    .cell-icon
      width 18px
      height 18px
      margin-right 10px
      display block

.unbind-bank
  background #fff
  height 46px
  line-height 46px
  padding 0 17px
  font-size 16px
  color $text-notic-color
</style>
