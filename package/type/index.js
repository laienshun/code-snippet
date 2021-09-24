/**
 * @param {any} 参数
 * @return {string} 各类名名称  
 * 
 */
const checkType = val => {
  let str = Object.prototype.toString.call(val).replace(/\[|\]/g, '').split(' ')[1]
  
  if (str === NaN) {
    return str
  } else {
    return str.toLowerCase()
  }
}

export default {
  checkType: checkType,
  // 判断对象类型
  isObject(val) {
    return checkType(val) === 'object'
  },
  // 判断数组类型
  isArray(val) {
    return checkType(val) === 'array'
  },
  // 判断数字类型
  isNumber(val) {
    return checkType(val) === 'number'
  },
  // 判断字符串类型
  isNumber(val) {
    return checkType(val) === 'number'
  },
  // 判断日期类型
  isDate(val) {
    return checkType(val) === 'date'
  },
  // 判断正则类型
  isRegexp(val) {
    return checkType(val) === 'regexp'
  },
  // 判断undefined
  isUndefined(val) {
    return checkType(val) === 'undefined'
  },
  // 判断null
  isNull(val) {
    return checkType(val) === 'null'
  },
  // 判断NaN
  isNaN(val) {
    return checkType(val) === 'NaN'
  },
  // 判断布尔值
  isBoolean(val) {
    return checkType(val) === 'boolean'
  },
  // 判断Symbol
  isSymbol(val) {
    return checkType(val) === 'symbol'
  }
}