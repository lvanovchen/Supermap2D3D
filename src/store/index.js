import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * 应用状态管理
 */
export default new Vuex.Store({
  state: {
    // 应用全局状态
    app: {
      heightAppMain: 0
    }
  },

  mutations: {
    /**
     * 设置应用状态
     * @param {Object} state - 当前状态
     * @param {Object} payload - { name: 状态名, value: 状态值 }
     */
    setAppState(state, payload) {
      if (payload && payload.name) {
        state.app[payload.name] = payload.value;
      }
    },

    /**
     * 登录成功处理
     * @param {Object} state - 当前状态
     * @param {*} loginData - 登录数据
     */
    loginSuccess(state, loginData) {
      state.loginData = loginData;
    }
  },

  actions: {
    /**
     * 异步设置应用状态
     */
    setAppStateAsync({ commit }, payload) {
      commit('setAppState', payload);
    }
  },

  getters: {
    /**
     * 获取应用状态
     */
    appState: state => state.app
  }
});