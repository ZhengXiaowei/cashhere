<template>
  <div class="submit-btn__box">
    <button class="submit-btn" :style="{'height':height+'px'}" @click="doAction">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '立即提交'
    },
    height: {
      type: String,
      default: '40'
    }
  },
  methods: {
    doAction () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" scoped>
.submit-btn__box
  text-align center
  margin-top 20px

  .submit-btn
    border none
    width 80%
    height 40px
    color #fff
    background #ff5532
    box-shadow 0px 0px 6px 3px rgba(255, 85, 50, 0.2)
    border-radius 30px
</style>
