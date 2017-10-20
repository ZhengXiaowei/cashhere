<template>
  <div class="page has-navbar" v-nav="{title:'我要还款',showBackButton:true}">
    <div class="page-content">
      <div class="repay-list__box">
        <template v-for="(item,index) in repayList">
          <repay-item :repay-item-obj="item" :key="index"></repay-item>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import RepayItem from 'base/repayItem/repayitem'

export default {
  components: {
    RepayItem
  },
  data () {
    return {
      repayList: [{
        id: 1,
        no: '170000000000001',
        money: '1000',
        day: '7',
        time: '2017-06-08 15:05:21',
        lastDay: '4',
        status: '待还款'
      }, {
        id: 2,
        no: '170000000000002',
        money: '1000',
        day: '35',
        time: '2017-06-08 15:05:21',
        lastDay: '26',
        status: '待还款'
      }, {
        id: 3,
        no: '170000000000003',
        money: '1000',
        day: '21',
        time: '2017-06-08 15:05:21',
        lastDay: '18',
        status: '待还款'
      }, {
        id: 4,
        no: '170000000000004',
        money: '1000',
        day: '28',
        time: '2017-06-08 15:05:21',
        lastDay: '26',
        status: '待还款'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.repay-list__box
  margin-top 10px
</style>
