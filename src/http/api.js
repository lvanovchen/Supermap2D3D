// API请求封装
import axios from './index';

/**
 * GET请求
 * @param {string} url - 请求地址
 * @param {Object} params - 请求参数
 * @returns {Promise} 请求结果
 */
export function get(url, params) {
    return axios.get(url, { params });
}

/**
 * POST请求
 * @param {string} url - 请求地址
 * @param {Object} data - 请求数据
 * @returns {Promise} 请求结果
 */
export function post(url, data) {
    return axios.post(url, data);
}