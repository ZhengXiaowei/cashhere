<template>
  <div class="page">
    <div class="page-content">
      <form action="https://wap.lianlianpay.com/signApply.htm"
            method="post">
        <input type="text"
               name="req_data"
               v-model="abc">
        <button type="submit"
                ref="subBtn">提交</button>
      </form>
    </div>
  </div>
</template>

<script>
import { test } from 'api/test'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
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
      }],
      hasData: false,
      abc: ''
    }
  },
  mounted () {
    setTimeout(() => {
      if (this.$refs.scroller) {
        this.$refs.scroller.resize()
      }
    })

    test().then(res => {
      // let reg = /(!DOCTYPE)/
      // let a = res.data.match(reg)
      console.log(res)
      this.abc = res.req_data
      setTimeout(() => {
        this.$refs.subBtn.click()
      }, 1000)
    })
    // 实时获取滚动位置
    // this.timer = setInterval(() => {
    //   let { left, top } = this.$refs.scroller.getPosition()

    //   this.x = left
    //   this.y = top
    //   console.log(this.x, this.y)
    // }, 50)
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        // console.log(done)
        done()
        // setTimeout(() => {
        //   if (this.$refs.scroller) {
        //     this.$refs.scroller.finishPullToRefresh()
        //   }
        // })
      }, 3000)
    },
    infinite (done) {
      console.log(1)
      if (this.hasData) {
        setTimeout(() => {
          done(true)
          // setTimeout(() => {
          //   if (this.$refs.scroller) {
          //     this.$refs.scroller.finishInfinite(true)
          //   }
          // })
        }, 1500)
        return
      }
      setTimeout(() => {
        let i = this.items[this.items.length - 1].id
        for (let j = i + 1; j < i + 5; j++) {
          let item = {
            id: j,
            text: '内容' + j
          }
          this.items.push(item)
        }
        this.hasData = true
        done()
        // setTimeout(() => {
        //   if (this.$refs.scroller) {
        //     this.$refs.scroller.finishInfinite()
        //   }
        // })
      }, 1500)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
