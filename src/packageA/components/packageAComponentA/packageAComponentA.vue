<template>
  <view>
    <view>这是分包A里面的A组件</view>
    <packageBComponentA></packageBComponentA>
  </view>
</template>
<script>
import packageBComponentA from '@/packageB/components/packageBComponentA/packageBComponentA.vue'

export default {
  components: {
    packageBComponentA
  },
  data  () {
    return {

    }
  },
  methods: {

  },
}
</script>
<style lang='scss' scoped>

</style>