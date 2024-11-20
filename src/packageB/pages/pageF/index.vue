<template>
  <view class="flex flex-col">
    <view class="text-center">我是分包B的F页面</view>
    <button class="mt-20rpx" type="primary" @click="goToG">点我跳转到G页面</button>
  </view>
  </template>
  <script>
  export default {
    data  () {
      return {
  
      }
    },
    methods: {
      goToG() {
        uni.navigateTo({
          url: '/packageB/pages/pageG/index'
        })
      }
    },
  }
  </script>
  <style lang='scss' scoped>
  
  </style>