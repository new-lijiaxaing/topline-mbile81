<template>
  <van-popup
    :value="value"
    @input="$emit('input', $event)"
    position="bottom"
    :style="{height: '90%'}"
  >
    <van-cell icon="cross" @click="$emit('input', false)" />
    <!-- 我的频道 -->
    <van-cell title="我的频道" label="点击进入频道">
      <van-button round type="danget" size="mini" v-show="!isEdit" @click="isEdit=true">编辑</van-button>
      <van-button round type="danger" size="mini" v-show="isEdit" @click="isEdit=false">完成</van-button>
    </van-cell>
    <van-grid>
      <van-grid-item  v-for="(channel,index) in channels" :key="channel.id" >
        <div slot="text" class="van-grid-item__text" :class="{ active: active === index }" >
          {{ channel.name }}
        </div>
        <!-- 关闭按钮 -->
        <van-icon slot="icon" class="close-icon" name="close" v-show="isEdit" />
      </van-grid-item>
    </van-grid>
    <!-- 推荐频道 -->
    <van-cell title="推荐频道" label="点击添加频道" />
    <van-grid>
      <van-grid-item v-for="channel in channels" :key="channel.id" :text="channel.name" />
    </van-grid>
  </van-popup>
</template>

<script>
export default {
  name: 'ChannelEdit',
  props: {
    value: {
      type: Boolean,
      required: true
    },
    channels: {
      type: Array,
      required: true
    },
    // 接收当前显示的频道的索引
    active: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      // 是否是编辑模式
      isEdit: false
    }
  }
}
</script>

<style lang="less" scoped>
.close-icon {
  position: absolute;
  right: 0;
  top: 0;
}
.active {
  color: red
}
</style>
