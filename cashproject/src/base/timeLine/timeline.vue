<template>
  <div class="timeline-box">
    <template v-for="(item,index) in timeLineData">
      <time-line-item :key="index" :class="{'is_first':index===timeLineData.length-1,'is_end':index===0}" :item-obj="item">
      </time-line-item>
    </template>
  </div>
</template>

<script>
import TimeLineItem from './timeline_item'
export default {
  props: {
    timeLineData: {
      type: Array,
      default: []
    }
  },
  components: {
    TimeLineItem
  }
}
</script>

<style lang="stylus" scoped>
.timeline-box
  margin-top 21px

.flex-box
  display flex
  text-align center
</style>
