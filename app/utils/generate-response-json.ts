
interface Generate<T> { code: number, data: T | any, msg: string }

/**
 * @function 生成返回的json
 * @param data 返回的数据
 * @param msg 成功描述
 */
export function generateSuccess<T>(data?: T, msg = 'success'): Generate<T> {
  return { code: 0, data: data || null, msg };
}

/**
 * @function 生成错误信息
 * @param data 返回的错误数据
 * @param msg 错误描述
 */
export function generateError<T>(data?: T, msg = '出错了，请联系管理员', code = 1000): Generate<T> {
  return { code, data: data || null, msg };
}

