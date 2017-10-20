<template>
  <div class="bank-item__box" @click="unbind(bankInfo.id)">
    <img :src="bankInfo.bankBg" :alt="bankInfo.bankName" />
    <div class="bank-item__info">
      <div class="bank-info__top">
        <p class="bank-name">{{bankInfo.bankName}}</p>
        <p class="bank-type">{{bankInfo.bankType}}</p>
      </div>
      <div class="bank-info__bottom">
        <p class="bank-nu">{{bankNo}}</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    bankInfo: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      bankNo: ''
    }
  },
  created () {
    this.bankNo = '**** **** **** ' + this.bankInfo.bankNo.substring(this.bankInfo.bankNo.length - 4, this.bankInfo.bankNo.length)
  },
  methods: {
    unbind (id) {
      this.$emit('click', id)
    }
  }
}
</script>

<style lang="stylus" scoped>
.bank-item__box
  margin 0 12px 12px
  font-size 0
  position relative

  .bank-item__info
    position absolute
    left 16%
    right 5%
    top 8%
    bottom 8%
    padding-left 10px
    color #fff

    .bank-info__top
      font-size 14px
      line-height 16px

      .bank-type
        color #e6b3b5
        font-size 12px
        margin-top 3%

    .bank-info__bottom
      font-size 24px
      margin-top 5%

  img
    width 100%
</style>
