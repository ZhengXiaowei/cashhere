<template>
  <div class="page has-navbar" v-nav="{title:'借款进度',showBackButton:true}">
    <div class="page-content">
      <time-line :time-line-data="timelineData"></time-line>
    </div>
  </div>
</template>

<script>
import TimeLine from 'base/timeLine/timeline'

export default {
  components: {
    TimeLine
  },
  data () {
    return {
      timelineData: [{
        time: '10:05',
        date: '2017-08-05',
        intro: '资料填写完成',
        status: 0
      }, {
        time: '10:05',
        date: '2017-08-05',
        intro: '审核中,可能会电话联系您,请保持电话畅通',
        status: 0
      }, {
        time: '10:05',
        date: '2017-08-05',
        intro: '审核成功',
        status: 0
      }, {
        time: '10:05',
        date: '2017-08-05',
        intro: '打款中,等待银行处理,到账情况视银行情况而定,请注意查收!',
        status: 1
      }]
    }
  },
  created () {
    let timelines = this.timelineData
    let timeArr = []
    for (let i = timelines.length - 1; i >= 0; i--) {
      timeArr.push(timelines[i])
    }
    this.timelineData = timeArr
  }
}
</script>
