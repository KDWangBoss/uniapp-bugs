<template>
  <view class="flex flex-col">
    <view class="text-center">我是分包B的G页面</view>
    <button class="mt-20rpx" type="primary" @click="goToH">点我跳转到H页面</button>
  </view>
  </template>
  <script>
  export default {
    data  () {
      return {
  
      }
    },
    methods: {
      goToH() {
        uni.navigateTo({
          url: '/packageB/pages/pageH/index'
        })
      }
    },
  }
  </script>
  <style lang='scss' scoped>
  
  </style>