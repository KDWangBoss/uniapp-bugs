<template>
  <view class="flex flex-col">
    <view class="text-center">我是分包B的E页面</view>
    <button class="mt-20rpx" type="primary" @click="goToF">点我跳转到F页面</button>
  </view>
  </template>
  <script>
  export default {
    data  () {
      return {
  
      }
    },
    methods: {
      goToF() {
        uni.navigateTo({
          url: '/packageB/pages/pageF/index'
        })
      }
    },
  }
  </script>
  <style lang='scss' scoped>
  
  </style>