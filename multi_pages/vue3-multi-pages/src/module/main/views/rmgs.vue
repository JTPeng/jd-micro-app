<template>
  <div>
    {{ url }}
    <micro-app
      name='app-rmgs'
      :url='url'
      :data='microAppData'
      @created='handleCreate'
      @beforemount='handleBeforeMount'
      @mounted='handleMount'
      @unmount='handleUnmount'
      @error='handleError'
      @datachange='handleDataChange'
    ></micro-app>
  </div>
</template>

<script >
import config from '../config'

export default {
  name: 'rmgs',
  data () {
    return {
      url: `${config.rmgs}`,
      // url: `${config.rmgsTest}`,
      microAppData: {msg: '来自基座的数据'}
    }
  },
  methods: {
    handleCreate () {
      console.log('chile-rmgs 创建了')
    },

    handleBeforeMount () {
      console.log('chile-rmgs 即将被渲染')
    },

    handleMount () {
      console.log('chile-rmgs 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount () {
      console.log('chile-rmgs 卸载了')
    },

    handleError () {
      console.log('chile-rmgs 加载出错了')
    },

    handleDataChange (e) {
      console.log('来自子应用 chile-rmgs 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
