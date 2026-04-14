/**
 * HTTP请求配置
 * 封装axios请求拦截和响应拦截
 */
import axios from 'axios';
import router from 'vue-router';
import Cookies from 'js-cookie';
import store from '../store';

/**
 * 定义请求常量
 */
export const ERR_OK = true;

// 从环境变量读取API基础URL
const baseURL = process.env.VUE_APP_API_URL || 'http://106.75.229.99:2021/api/';
axios.defaults.baseURL = baseURL;

// 请求拦截
axios.interceptors.request.use(
    config => {
        config.headers['Content-Type'] = 'application/json;charset=UTF-8';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 响应拦截
axios.interceptors.response.use(
    response => {
        const { data } = response;
        if (data.responseCode === 202) {
            // token过期，移除cookie并重新登录
            Cookies.remove('loginMsg');
            Cookies.remove('resumeId');
            return Promise.reject(new Error('Token expired'));
        }
        return Promise.resolve(data);
    },
    error => {
        if (error.response && error.response.status) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    // 未登录，跳转登录页
                    router.replace({
                        path: '/login',
                        query: { redirect: router.currentRoute.fullPath }
                    });
                    break;
                case 403:
                    // token过期
                    localStorage.removeItem('token');
                    store.commit('loginSuccess', null);
                    setTimeout(() => {
                        router.replace({
                            path: '/login',
                            query: { redirect: router.currentRoute.fullPath }
                        });
                    }, 1000);
                    break;
                case 404:
                    // 请求不存在
                    break;
                default:
                    // 其他错误
                    break;
            }
        }
        return Promise.reject(error.response || error);
    }
);

export default axios;