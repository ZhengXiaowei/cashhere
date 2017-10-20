<template>
  <div class="page has-navbar" v-nav="{title:'消息中心',showBackButton:true}">
    <div class="page-content">
      <group>
        <cell class="item-cells" title="系统公告" :link="{path:'/messageList'}">
          <img slot="icon" class="cell-icon" src="./icon_system.png" alt="">
          <p slot="inline-desc" class="item-cells__notice">系统公告抢先知</p>
        </cell>
        <cell class="item-cells" title="活动公告" is-link>
          <img slot="icon" class="cell-icon" src="./icon_activity.png" alt="">
          <p slot="inline-desc" class="item-cells__notice">活动公告及时晓</p>
        </cell>
        <cell class="item-cells" title="订单消息" is-link>
          <img slot="icon" class="cell-icon" src="./icon_order.png" alt="">
          <p slot="inline-desc" class="item-cells__notice">订单消息全监控</p>
          <badge text="2"></badge>
        </cell>
      </group>
    </div>
  </div>
</template>

<script>
import { Group, Cell, Badge } from 'vux'
export default {
  components: {
    Group,
    Cell,
    Badge
  }
}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.item-cells
  font-size 14px
  color $text-label-color

  .cell-icon
    width 40px
    height 40px
    display block
    margin-right 6px

  .item-cells__notice
    font-size 12px
    color $text-notic-color
</style>
