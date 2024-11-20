<template>
  <view class="flex flex-col">
    <view class="text-center">首页的age-{{age}}</view>
    <view class="text-center mt-20rpx">我是分包B的C页面</view>
    <button class="mt-20rpx" type="primary" @click="goToD">点我跳转到D页面</button>
    <button class="mt-20rpx" type="primary" @click="ageAdd">点我控制首页的age新增</button>
  </view>
</template>
<script>
export default {
  data  () {
    return {
      age: 0
    }
  },
  onLoad(options) {
    this.age = options.age
  },
  methods: {
    ageAdd() {
      uni.$emit('onChangeAge', ++this.age)
    },
    goToD() {
      uni.navigateTo({
        url: '/packageB/pages/pageD/index'
      })
    }
  },
}
</script>
<style lang='scss' scoped>

</style>