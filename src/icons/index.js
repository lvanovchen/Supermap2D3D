import Vue from 'vue';
import SvgIcon from '../components/SvgIcon';

// 全局注册SVG图标组件
Vue.component('SvgIcon', SvgIcon);

// 自动导入所有SVG文件
const requireAll = requireContext => requireContext.keys().map(requireContext);
const req = require.context('./svg', false, /\.svg$/);
requireAll(req);