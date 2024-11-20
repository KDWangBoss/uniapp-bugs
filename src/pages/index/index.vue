<!--
 * @Author: jackliy@meiya.com
 * @Date: 2024-06-20 16:57:07
 * @LastEditTime: 2024-07-08 10:28:20
 * @FilePath: /uniapp-unocss/src/pages/index/index.vue
 * @LastEditors: jackliy@meiya.com
-->
<template>
	<view class="flex flex-col"> 
    <view class="text-center c-red p-20rpx">{{ age }}</view>
    <button type="primary" @click="goToA">点我进入A包</button>
    <button class="mt-20rpx" type="primary" @click="goToB">点我进入B包</button>
    <button class="mt-20rpx" type="primary" @click="ageAdd">点我age新增</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
        inputValue: '123',
        age: 18
			}
		},
		onLoad() {
      uni.$on('onChangeAge', this.onChangeAge)
		},
    onUnload() {
      uni.$off('onChangeAge', this.onChangeAge)
      console.log('%c 首页onUnload', 'color: red;')
    },
		methods: {
      goToA() {
        uni.navigateTo({
          url: '/packageA/pages/pageA/index'
        })
      },
      goToB() {
        uni.navigateTo({
          url: `/packageB/pages/pageC/index?age=${this.age}`
        })
		  },
      onChangeAge(age = 0) {
        console.log('首页age变化了：', age)
        this.age = age
      },
      ageAdd() {
        uni.$emit('onChangeAge', this.age + 1)
      }
	  }
  }
</script>

<style>
</style>
