<template>
  <div class="page has-navbar" v-nav="{title:'系统公告',showBackButton:true}">
    <scroller ref="scroller" class="page-content" :on-refresh="refresh" :on-infinite="loadMoreMsg">
      <msg-item v-for="(item,index) in msgList" :key="index" :msg-item-obj="item" class="message-item"></msg-item>
    </scroller>
  </div>
</template>

<script>

import MsgItem from 'base/msgItem/msgitem'

export default {
  components: {
    MsgItem
  },
  data () {
    return {
      hasData: true,
      msgList: [{
        time: '2017-06-05 19:39:21',
        typeText: '系统通知',
        introText: '尊敬的用户您好：恭喜您成功认证了我们的平台。',
        id: 1
      }, {
        time: '2017-06-05 19:39:21',
        typeText: '系统通知',
        introText: '尊敬的用户您好：恭喜您成功认证了我们的平台。',
        id: 2
      }, {
        time: '2017-06-05 19:39:21',
        typeText: '系统通知',
        introText: '尊敬的用户您好：恭喜您成功认证了我们的平台。',
        id: 3
      }, {
        time: '2017-06-05 19:39:21',
        typeText: '系统通知',
        introText: '尊敬的用户您好：恭喜您成功认证了我们的平台。',
        id: 4
      }, {
        time: '2017-06-05 19:39:21',
        typeText: '系统通知',
        introText: '尊敬的用户您好：恭喜您成功认证了我们的平台。',
        id: 5
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
    loadMoreMsg (done) {
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
    }
  }
}
</script>

<style lang="stylus" scoped>
.message-item
  &:last-child
    margin-bottom 10px
</style>
