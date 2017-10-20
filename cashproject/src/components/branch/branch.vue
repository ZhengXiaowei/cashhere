<template>
  <div class="page has-navbar" v-nav="{title:'品牌中心',showBackButton:true}">
    <div class="page-content">
      <div class="branch_box flex-box">
        <img src="./logo_zlqb.png" alt="" />
        <div class="branch_info">
          <p>这里钱包，专门为8090后打造的信用钱包。免费申请，在线借款，快速到账！无担保，无抵押，利息低，信用越好，贷额越高！</p>
          <p>这里钱包是公司配合整体战略，以更低成本，更快捷的程序来提供更好的金融服务的一款小额贷款平台，旨在用高效、便捷、安全、可靠的互联网金融方式，为年轻人解决燃眉之急。</p>
          <p>小额贷款，就来“这里钱包”！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
@import '~common/stylus/variable'

.branch_box
  justify-content center
  align-items center
  flex-direction column

  img
    width 128px
    height 128px
    margin 40px 0 36px

  .branch_info
    padding 0 23px
    font-size 12px
    color $text-label-color
    line-height 24px
    text-indent 2em
</style>
