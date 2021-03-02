import { Controller } from 'egg';
import { generateSuccess, generateError } from '../utils/generate-response-json/generate-response-json';
import { GetLogListParams, LogData, GetLogListRetrun } from '../utils/types/log-types';

type PagingData = GetLogListParams & GetLogListRetrun<LogData>;
class LogController extends Controller {
  /**
   * @function 获取日志列表数据
   */
  public async getLogList() {
    const { ctx } = this;

    // 获取参数
    const query = ctx.request.query as unknown as GetLogListParams;
    try {
      const listData = await ctx.service.logService.getLogList(
        query,
      );
      ctx.body = generateSuccess<PagingData>({ ...query, ...listData });
    } catch (e) {
      ctx.body = generateError<any[]>([]);
    }
  }

  /**
   * @function 添加一条日志
   */
  public async postAddLog() {
    const { ctx } = this;
    await ctx.service.logService.addLog(ctx.request.body);
    ctx.body = generateSuccess<null>(null);
  }

  /**
   * @function 删除某一条日志
   */
  public async delLog() {
    const { ctx } = this;
    const { id } = ctx.request.body;
    ctx.service.logService.delLog(id);
    ctx.body = generateSuccess<null>(null);
  }

  /**
   * @function 获取日志详情数据
   */
  public async getLogDetail() {
    const { ctx } = this;
    const res = await ctx.service.logService.selectLogDetail(+ctx.request.query.id);
    ctx.body = generateSuccess<LogData>(res);
  }

  /**
   * @function 更新/编辑日志
   */
  public async updateLog() {
    const { ctx } = this;
    ctx.service.logService.updateLog(ctx.request.body);
    ctx.body = generateSuccess<null>(null);
  }
}

export default LogController;
