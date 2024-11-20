<template>
<view class="h-100vh bg-red flex flex-col">
  <view class="text-center">我是分包A页面</view>
  <button class="mt-20rpx" type="primary" @click="goToMySelf">点我跳转到自己 {{ count }}  {{ person.age }}</button>
  <button class="mt-20rpx" type="primary" @click="goToIndex">点击我reLaunch到首页</button>


  <MyComponent ref="MyComponent"></MyComponent>
</view>
</template>
<script>
import MyComponent from '@/packageB/components/MyComponent/MyComponent.vue'

export default {
  components: {
    MyComponent
  },
  data  () {
    return {
      count: 0,
      person: {
        name: 'jackliy',
        age: 18
      }
    }
  },
  onUnload() {
    console.log('%c 分包A页面onUnload', 'color: red;')
  },
  onLoad() {
    this.$nextTick(() => {
      console.log('打印了组件变量值：', this.$refs.MyComponent.X)
    })
  },
  methods: {
    goToMySelf() {
      this.count++
      this.person.age++
      
      uni.navigateTo({
        url: '/packageA/pages/pageA/index'
      })
    },
    goToIndex() {
      uni.reLaunch({
        url: '/pages/index/index'
      })
    }
  },
}
</script>
<style lang='scss' scoped>

</style>