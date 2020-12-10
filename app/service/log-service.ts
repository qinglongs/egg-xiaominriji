import { Service } from 'egg';
import { GetLogListParams, LogData, GetLogListRetrun } from '../utils/types/log-types';

const addLogSql = { image: 'https://img95.699pic.com/photo/50046/5562.jpg_wh300.jpg', title: '测试插入数据', content: '测试内容' };

const LOG_TABLE_NAME = 'log';

class LogService extends Service {
  /**
   * @function 获取日志分页数据
   */
  async getLogList(query: GetLogListParams): Promise<GetLogListRetrun<LogData>> {
    const { page: offset, size: limit } = query;

    // 参数
    const selectQuery = {
      offset: (offset - 1) * limit,
      limit: +limit,
    };

    // 获取分页数据
    const list = await this.app.mysql.select(LOG_TABLE_NAME, selectQuery);

    // 获取数据总数
    const total = await this.app.mysql.count(LOG_TABLE_NAME);

    return { list, total };
  }

  /**
   * @function 添加日志
   */
  async addLog() {
    await this.app.mysql.insert(LOG_TABLE_NAME, addLogSql);

  }

  /**
   * @function 查询日志详情
   * @param id 日志id
   */
  async selectLogDetail(id: number) {
    return await this.app.mysql.get(LOG_TABLE_NAME, { id });
  }

  /**
   * @function 更新日志
   * @param data 更新的数据
   */
  async updateLog(data: LogData) {
    return await this.app.mysql.update(LOG_TABLE_NAME, data);
  }

  /**
   * @function 删除日志
   * @param id 日志id
   */
  async delLog(id: number) {
    // delete from log where id=xxx;
    console.log(id);
    return await this.app.mysql.delete(LOG_TABLE_NAME, { id: +id });
  }
}

export default LogService;
