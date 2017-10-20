<template>
  <div class="page has-navbar" v-nav="{title:'修改密码',showBackButton:true}">
    <div class="page-content page-changepsd">
      <group>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" :type="toggleType.old" v-model="userInfo.oldpsd" placeholder="请输入旧密码">
          <div slot="right" class="toggle-type">
            <i class="icon" :class="[showPassword.old ? 'icon-see' : 'icon-unsee']" @click="toggleTypeMethods('old')"></i>
          </div>
        </x-input>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" :type="toggleType.newp" v-model="userInfo.newpsd" placeholder="请设置新密码">
          <div slot="right" class="toggle-type">
            <i class="icon" :class="[showPassword.newp ? 'icon-see' : 'icon-unsee']" @click="toggleTypeMethods('newp')"></i>
          </div>
        </x-input>
        <x-input class="middle-input" text-align="left" :show-clear="showClear" :type="toggleType.newpA" v-model="newpsdAgain" placeholder="请再次确认密码">
          <div slot="right" class="toggle-type">
            <i class="icon" :class="[showPassword.newpA ? 'icon-see' : 'icon-unsee']" @click="toggleTypeMethods('newpA')"></i>
          </div>
        </x-input>
      </group>
      <submit-button class="reset-btn" text="确定" height="50" @click="reset"></submit-button>
    </div>
  </div>
</template>

<script>
import { Group, XInput } from 'vux'
import SubmitButton from 'base/submitButton/submitbutton'

export default {
  components: {
    Group,
    XInput,
    SubmitButton
  },
  data () {
    return {
      showClear: false,
      toggleType: {
        old: 'password',
        newp: 'password',
        newpA: 'password'
      },
      showPassword: {
        old: false,
        newp: false,
        newA: false
      },
      userInfo: {
        oldpsd: '',
        newpsd: ''
      },
      newpsdAgain: ''
    }
  },
  methods: {
    toggleTypeMethods (type) {
      this.showPassword[type] = !this.showPassword[type]
      this.showPassword[type] ? this.toggleType[type] = 'text' : this.toggleType[type] = 'password'
    },
    reset () {
      // 修改密码
    }
  }
}
</script>

<style lang="stylus" scoped>

.page-changepsd
  .reset-btn
    margin-top 50px
</style>
