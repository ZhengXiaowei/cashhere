<template>
  <div class="page has-navbar" v-nav="{title:'消息中心',showBackButton:true}">
    <div class="page-content">
      <template v-for="(item,index) in msgList">
        <msg-item :key="index" :msg-item-obj="item"></msg-item>
      </template>
    </div>
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
      }]
    }
  }
}
</script>
