<template>
  <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
/**
 * SVG图标组件
 * 使用svg-sprite-loader加载的图标
 */
export default {
  name: 'SvgIcon',

  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },

  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      return this.className ? `svg-icon ${this.className}` : 'svg-icon';
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin: 0 0.1em;
}
</style>