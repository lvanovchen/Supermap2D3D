/**
 * 工具类
 */
export default class Utils {
    /**
     * 验证手机号
     * @param {string} str - 手机号
     * @returns {boolean} 是否有效
     */
    static isPhoneAvailable(str) {
        const phoneRegex = /^1[3-9]\d{9}$/;
        return phoneRegex.test(String(str));
    }

    /**
     * 获取浏览器类型
     * @returns {string} 浏览器名称
     */
    static getExplorer() {
        const explorer = window.navigator.userAgent;

        if (explorer.indexOf("MSIE") >= 0 || explorer.indexOf("Trident") >= 0) {
            return "IE";
        }
        if (explorer.indexOf("Firefox") >= 0) {
            return "Firefox";
        }
        if (explorer.indexOf("Chrome") >= 0) {
            return "Chrome";
        }
        if (explorer.indexOf("Opera") >= 0) {
            return "Opera";
        }
        if (explorer.indexOf("Safari") >= 0) {
            return "Safari";
        }
        return "Unknown";
    }

    /**
     * 删除数组中指定元素（修改原数组）
     * @param {Array} arr - 目标数组
     * @param {*} val - 要删除的值
     */
    static removeArrVal(arr, val) {
        const index = arr.indexOf(val);
        if (index > -1) {
            arr.splice(index, 1);
        }
    }

    /**
     * 判断值是否为空
     * @param {*} obj - 要检查的值
     * @returns {boolean} 是否为空
     */
    static isEmpty(obj) {
        return obj === undefined || obj === null || obj === '';
    }

    /**
     * 判断值是否非空
     * @param {*} obj - 要检查的值
     * @returns {boolean} 是否非空
     */
    static isNotEmpty(obj) {
        return !Utils.isEmpty(obj);
    }
}