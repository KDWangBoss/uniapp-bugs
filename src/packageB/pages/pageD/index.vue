<template>
  <view class="flex flex-col">
    <view class="text-center">我是分包B的D页面</view>
    <button class="mt-20rpx" type="primary" @click="goToE">点我跳转到E页面</button>
  </view>
  </template>
  <script>
  export default {
    data  () {
      return {
  
      }
    },
    methods: {
      goToE() {
        uni.navigateTo({
          url: '/packageB/pages/pageE/index'
        })
      }
    },
  }
  </script>
  <style lang='scss' scoped>
  
  </style>