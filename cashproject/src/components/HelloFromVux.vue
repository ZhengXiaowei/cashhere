<template>
  <div class="page has-navbar" v-nav="{title:'首页',showMenuButton:true,menuButtonText: iconText}">
    <div class="page-content">
      <button class="button button-positive button-block" @click="clicked">Positive</button>
      <button class="button button-positive button-block" @click="goScroller">scroller组件</button>
      <button class="button button-positive button-block" @click="goTimeLine">timeline组件</button>
      <button class="button button-positive button-block" @click="showAlert">测试alert服务</button>
      <button class="button button-positive button-block" @click="showMsg">消息</button>
      <button class="button button-positive button-block" @click="showRecord">记录</button>
      <code-button></code-button>
      <group label-width="5.5em" label-margin-right="2em" label-align="right">
        <x-address title="选择所在地" v-model="value" :list="addressData" value-text-align="left" @on-shadow-change="onShadowChange" @on-hide="logHide" @on-show="logShow" placeholder="请选择地址" :show.sync="showAddress"></x-address>
        <x-input title="上报人" v-model="value1" placeholder="输入上报人"></x-input>
        <popup-picker title="借款期限" :data="list1" v-model="value2" value-text-align="right" @on-show="onShow" @on-hide="onHide" @on-change="onChange" placeholder="选择借款天数"></popup-picker>
      </group>
      <div v-html="aaaa"></div>
    </div>
  </div>
</template>

<script>
import { Group, PopupPicker, XInput, XButton, XAddress, ChinaAddressV4Data } from 'vux'

import { countDown } from 'common/js/utils'

import CodeButton from 'base/codeButton/codebutton'

export default {
  components: {
    XAddress,
    Group,
    XInput,
    XButton,
    PopupPicker,
    CodeButton
  },
  mounted () {
    // this.$refs.scroller.resize()
    console.log(this)
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      iconText: '<i class="icon-dkw_jiekuan"></i>',
      addressData: ChinaAddressV4Data,
      value: [],
      value1: '',
      list1: [['7天', '14天', '21天', '28天', '35天']],
      value2: ['14天'],
      showAddress: false,
      msg: 'Hello World!',
      items: [{
        id: 1,
        text: '内容1'
      }, {
        id: 2,
        text: '内容2'
      }, {
        id: 3,
        text: '内容3'
      }, {
        id: 4,
        text: '内容4'
      }, {
        id: 5,
        text: '内容5'
      }, {
        id: 6,
        text: '内容6'
      }, {
        id: 7,
        text: '内容7'
      }, {
        id: 8,
        text: '内容8'
      }, {
        id: 9,
        text: '内容9'
      }, {
        id: 10,
        text: '内容10'
      }, {
        id: 11,
        text: '内容11'
      }, {
        id: 12,
        text: '内容12'
      }],
      hasData: false,
      aaaa: `<h3 style="margin-right: 0px; margin-bottom: 0px; margin-left: 0px; padding: 0px; font-family: 'Heiti SC', 微软雅黑, 'microsoft yahei', Arial, sans-serif; line-height: 30px; color: rgb(34, 34, 34); font-size: 16px;"><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><span style="margin: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;">年末将至，各学科专家均开始对本年度的临床研究进行总结盘点，下面就让我们与美国临床电生理学家John Mandrola一起回顾心脏病研究领域有哪些重大发现和进展。</span></p><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><br style="margin: 0px; padding: 0px;"></p><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><span style="margin: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;">1.PCSK9抑制剂的应用</span></p><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><span style="margin: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><br style="margin: 0px; padding: 0px;"></span></p><p style="margin-bottom: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;"><span style="margin: 0px; padding: 0px; word-wrap: break-word; word-break: break-all;">今年，<a class="channel_keylink" href="http://www.medsci.cn/article/list.do?q=FDA 

" style="margin: 0px; padding: 0px; color: rgb(77, 120, 183); word-wrap: break-word; word-break: break-all;">FDA</a>批准了注射用单克隆抗体evolocumab与 alirocumab的上市，其依据是两种药物均可大幅度降低LDL-C，但并无证据显示该效果可转化为心脏病、
`
    }
  },
  methods: {
    menuClick () {
      alert(1)
    },
    clicked (e) {
      countDown(e.target)
      // this.$router.push('/hello')
      // $app.setTitle('测试')
      // $loading.show('拼命加载中..')
      // setTimeout(() => {
      //   $loading.hide()
      // }, 2000)
      // setTimeout(() => {
      //   $toast.show('我关闭了', 3000)
      // }, 3000)
    },
    goScroller () {
      this.$router.push('/hello')
    },
    goTimeLine () {
      this.$router.push('/timeline')
    },
    showAlert () {
      let options = {
        components: {
          'SubmitButton': {
            template: `<div style="margin-top:20px;text-align:center"><button style="border:none;width:80%;height:40px;color:#fff;border-radius:20px;background:#ff5532;box-shadow:0px 0px 6px 3px rgba(255,85,50,0.2);"
            @click="doAction">{{text}}</button></div>`,
            props: {
              text: {
                type: String,
                default: '立即提交'
              }
            },
            methods: {
              doAction () {
                this.$parent.hide()
                window.$toast.show('关闭了', 2000)
              }
            }
          }
        }
      }
      window.$popup.fromTemplate('<p style="text-align:center">看看内容</p><submit-button text="提交"></submit-button>', options).show()
    },
    showMsg () {
      this.$router.push('/msg')
    },
    showRecord () {
      this.$router.push('/record')
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    },
    onShow () {
      console.log('on show')
    },
    onHide (type) {
      console.log('on hide', type)
    },
    onChange (val) {
      console.log('val change', val)
    }
  }
}
</script>

<style scoped lang="stylus">
.abc
  font-size 14px

.submit_box
  text-align center
  margin-top 20px

  .submit-btn
    border none
    width 80%
    height 40px
    color #fff
    background #ff5532
    border-radius 20px
</style>
