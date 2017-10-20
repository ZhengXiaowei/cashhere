<template>
  <div class="page has-navbar banklist" v-nav="{title:'银行卡',showBackButton:true,showMenuButton:true,menuButtonText:menuicon,onMenuButtonClick:addbank}">
    <div class="page-content">
      <div class="bank-list">
        <bank-item v-for="(item,index) in bankList" :key="index" :bank-info="item" @click="unbind"></bank-item>
      </div>
    </div>
  </div>
</template>

<script>
import BankItem from 'base/bankItem/bankitem'

export default {
  components: {
    BankItem
  },
  data () {
    return {
      menuicon: '<i class="icon-add icons"></i>',
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
    addbank () {
      this.$router.back('/bankAuth')
    }
  }
}
</script>

<style lang="stylus" scoped>
.bank-list
  margin-top 12px

.bank-add
  .item-cells
    height 46px
</style>
