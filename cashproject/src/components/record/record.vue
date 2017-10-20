<template>
  <div class="page has-navbar"
       v-nav="{title:'借款记录',showBackButton:true}">
    <div class="page-content">
      <template v-for="(item,index) in recordList">
        <record-item :key="index"
                     :record-item-obj="item"></record-item>
      </template>
    </div>
  </div>
</template>

<script>
import RecordItem from 'base/recordItem/recorditem'
export default {
  components: {
    RecordItem
  },
  data () {
    return {
      recordList: [{
        id: 1,
        no: '170000000000001',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }, {
        id: 2,
        no: '170000000000002',
        money: '1000',
        status: '打款成功',
        time: '2017-06-08 15:05:21'
      }, {
        id: 3,
        no: '170000000000003',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }, {
        id: 4,
        no: '170000000000004',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
