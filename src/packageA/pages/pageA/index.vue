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
import packageBComponentA from '@/packageB/components/packageBComponentA/packageBComponentA.vue'

export default {
  components: {
    MyComponent,
    packageBComponentA
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
  async onLoad() {
    await this.isComponentLoaded()
    this.$nextTick(() => {
      console.log('在nextTick中获取到的组件：', this.$refs)
    })
    console.log('在onLoad中获取到的组件：', this.$refs)
    // console.error('打印了值：', require)
    // wx.onLazyLoadError((type, subpackage, errMsg) => {
    //   console.error('打印了值：', type, subpackage, errMsg)
    // })
    // #ifdef MP-WEIXIN
    // require.async('@/packageB/components/MyComponent/MyComponent.vue', (com) => {
    //   console.error('打印了值：', com)
    // }, (err) => {
    //   console.error('分包加载失败', err);
    // });
    // #endif
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
    },
    isComponentLoaded() {
      return new Promise((resolve, reject) => {
        let timer = setInterval(() => {
          try {
            if (this.$refs.MyComponent) {
              resolve(this.$refs.MyComponent)
              clearTimeout(timer)
            }
          } catch (error) {
            
          }
        }, 500);
      })
    }
  },
}
</script>
<style lang='scss' scoped>

</style>