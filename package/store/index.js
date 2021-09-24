import type from '../type/index.js'

export default {
  // 设置值
  set(key, value) {
    if (type.isString(key)) return new Error('请输入字符串key值')
    localStorage.setItem(key, {
      key: key,
      type: type.checkType(value),
      value: ['object', 'array'].includes(type.checkType(value)) ? JSON.stringify(value) : value
    })
  },
  // 获取值
  get(key) {
    if (type.isString(key)) return new Error('请输入字符串key值')
    const value = localStorage.getItem(key)
    if (type.checkType(value) === 'object' && value.key === key) {
      return ['object', 'array'].includes(value.type) ? JSON.stringify(value.value) : value.value
    } else {
      return value
    }
  },
  // 删除
  remove(key) {
    if (type.isString(key)) return new Error('请输入字符串key值')
    localStorage.removeItem(key)
  },
  // 清除全部
  clear() {
    localStorage.clear()
  }
}