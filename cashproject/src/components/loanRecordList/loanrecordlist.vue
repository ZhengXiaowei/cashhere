<template>
  <div class="page has-navbar" v-nav="{title:'借款记录',showBackButton:true}">
    <div class="page-content">
      <div class="loan-top__menu flex-box">
        <button-bar theme="assertive" :tab-items="menuList" :tab-index="menuIndex" :on-tab-click="changeMenuIndex"></button-bar>
      </div>
      <scroller ref="scroller" style="top:104px" :height="scrollerV" :on-refresh="refresh" :on-infinite="loadMoreRecordList">
        <record-item v-for="(item,index) in recordList" :key="index" :record-item-obj="item" @click="getdetail"></record-item>
      </scroller>
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
      menuList: ['全部', '待还款'],
      menuIndex: 0,
      hasData: true,
      hasData1: true,
      recordList: [],
      allRecordList: [{
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
      }, {
        id: 5,
        no: '170000000000004',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }],
      waitRecordList: [{
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
      }, {
        id: 5,
        no: '170000000000004',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }, {
        id: 6,
        no: '170000000000004',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }, {
        id: 7,
        no: '170000000000004',
        money: '1000',
        status: '打款中',
        time: '2017-06-08 15:05:21'
      }]
    }
  },
  created () {
    this.recordList = this.allRecordList
  },
  mounted () {
    setTimeout(() => {
      if (this.$refs.scroller) {
        this.$refs.scroller.resize()
      }
    })
  },
  computed: {
    scrollerV () {
      return (window.innerHeight - 104).toString()
    }
  },
  methods: {
    changeMenuIndex (index) {
      this.menuIndex = index
      this.menuIndex === 0 ? this.recordList = this.allRecordList : this.recordList = this.waitRecordList
      this.$refs.scroller.resize()
    },
    getdetail (id) {
      this.$router.forward({
        path: `/loanDetail/${id}`
      })
    },
    refresh (done) {
      if (this.menuIndex === 0) {
        setTimeout(() => {
          console.log('刷新全部列表')
          done()
        }, 3000)
      } else {
        setTimeout(() => {
          console.log('刷新待还列表')
          done()
        }, 3000)
      }
    },
    loadMoreRecordList (done) {
      if (this.menuIndex === 0) {
        if (!this.hasData) {
          setTimeout(() => {
            console.log('全部还款无数据')
            done(true)
          }, 1500)
          return
        }
        setTimeout(() => {
          this.hasData = false
          done()
        }, 1500)
      } else {
        if (!this.hasData1) {
          setTimeout(() => {
            console.log('待还列表无数据')
            done(true)
          }, 1500)
          return
        }
        setTimeout(() => {
          this.hasData1 = false
          done()
        }, 1500)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'
@import '~common/stylus/mixin'

.loan-top__menu
  height 50px
  background #fff
  padding 0 12px
  justify-content center
  align-items center

  .von-button-bar
    margin 0
</style>

