<template>
  <div>
    {{ url }}
    <micro-app
      name='app-rmgs'
      :url='url'
      baseroute='/main-vue3/app-rmgs'
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

<script lang="ts">
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
    handleCreate (): void {
      console.log('chile-rmgs 创建了')
    },

    handleBeforeMount (): void {
      console.log('chile-rmgs 即将被渲染')
    },

    handleMount (): void {
      console.log('chile-rmgs 已经渲染完成')

      setTimeout(() => {
        // @ts-ignore
        this.microAppData = {msg: '来自基座的新数据'}
      }, 2000)
    },

    handleUnmount (): void {
      console.log('chile-rmgs 卸载了')
    },

    handleError (): void {
      console.log('chile-rmgs 加载出错了')
    },

    handleDataChange (e: CustomEvent): void {
      console.log('来自子应用 chile-rmgs 的数据:', e.detail.data)
    },
  }
}
</script>

<style>
</style>
