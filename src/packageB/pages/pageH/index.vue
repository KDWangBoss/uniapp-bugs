<template>
  <view class="flex flex-col">
    <view class="text-center">我是分包B的H页面</view>
    <button class="mt-20rpx" type="primary" @click="goToIndex">点我reLaunch到首页</button>
  </view>
  </template>
  <script>
  export default {
    data  () {
      return {
  
      }
    },
    methods: {
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