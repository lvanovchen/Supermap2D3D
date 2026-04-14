import ContentTitle from './ContentTitle.vue'

/**
 * 基础混入 - 提供通用组件功能
 */
export default {
  components: {
    ContentTitle
  },

  props: {
    show: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      state: this.show
    }
  },

  methods: {
    /**
     * 将字符串 'true'/'false' 转换为布尔值
     * @param {string|boolean} arg - 输入值
     * @returns {boolean} 转换后的布尔值
     */
    formatStringToBoolean (arg) {
      if (arg === 'true') return true
      if (arg === 'false') return false
      return arg
    },

    /**
     * 切换显示状态
     * @param {string|boolean} val - 目标状态
     */
    toggle (val) {
      const value = this.formatStringToBoolean(val)
      if (value === undefined) {
        this.state = !this.state
      } else {
        this.state = value
      }
      this.$emit('toggle', { name: this.name, value: this.state })
    },

    /**
     * 仅切换状态，不触发toggle事件
     * @param {string|boolean} val - 目标状态
     */
    toggleOnlyState (val) {
      const value = this.formatStringToBoolean(val)
      if (value === undefined) {
        this.state = !this.state
      } else {
        this.state = value
      }
      this.$emit('toggleOnlyState', { name: this.name, value: this.state })
    },

    /**
     * 最小化切换
     */
    toMini () {
      this.toggle()
      this.$emit('toggleRightMiniStatus', this.name)
    }
  }
}
