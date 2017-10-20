<template>
  <div class="page has-navbar" v-nav="{title:'还款流水',showBackButton:true}">
    <scroller class="page-content repayflow" ref="scroller" :on-refresh="refresh" :on-infinite="loadMoreRepayList">
      <record-item class="repayflow-item" v-for="(item,index) in repayFlowList" :key="index" :record-item-obj="item" border-color="#d5d5d5" @click="getdetail">
        <span class="repay-status" slot="right"></span>
      </record-item>
    </scroller>
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
      hasData: true,
      repayFlowList: [{
        id: 1,
        no: '170000000000001',
        money: '1000',
        time: '2017-06-08 15:05:21'
      }, {
        id: 2,
        no: '170000000000002',
        money: '1000',
        time: '2017-06-08 15:05:21'
      }, {
        id: 3,
        no: '170000000000003',
        money: '1000',
        time: '2017-06-08 15:05:21'
      }, {
        id: 4,
        no: '170000000000004',
        money: '1000',
        time: '2017-06-08 15:05:21'
      }, {
        id: 5,
        no: '170000000000004',
        money: '1000',
        time: '2017-06-08 15:05:21'
      }]
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$refs.scroller) {
        this.$refs.scroller.resize()
      }
    })
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        done()
      }, 3000)
    },
    loadMoreRepayList (done) {
      if (!this.hasData) {
        setTimeout(() => {
          done(true)
        }, 1500)
        return
      }
      setTimeout(() => {
        this.hasData = false
        done()
      }, 1500)
    },
    getdetail (id) {
      this.$router.forward({
        path: `/repayDetail/${id}`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.repayflow
  .repayflow-item
    color $text-notic-color

    .repay-status
      bg-image('icon_dkh')
      width 54px
      height 54px
      position absolute
      right 20px
      top 50%
      margin-top -27px
</style>
