/**
 * 日志分页参数
 */
export type GetLogListParams = {
  page: number;
  size: number;
};

/**
 * 日志详情数据
 */
export type LogData = {
  iamge: string;
  title: string;
  content: string;
  id: number;
};

/**
 * 获取日志分页数据service返回的数据
 */
export type GetLogListRetrun<T> = {
  list: T[];
  total: number;
};

