<template>
  <button class="code-btn" @click="doAction">
    {{text}}</button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '获取验证码'
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
.code-btn
  background #d5d5d5
  border none
  border-radius 20px
  color #fff
  padding 0 10px
  height 30px
  font-size 14px
</style>
