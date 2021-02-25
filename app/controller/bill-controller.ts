import { Controller } from 'egg';

import { GetBillListParams, AddBill, EditBill } from '../utils/types/bill-types';

class BillController extends Controller {

  /**
   * @function 调用获取账单列表数据服务
   * @param query 参数
   */
  async getBillList(query: GetBillListParams) {
    return this.service.billService.getBillList(query);
  }

  /**
   * @function 调用新增账单服务
   */
  async postAddBill(data: AddBill) {
    return this.service.billService.postAddBill(data);
  }

  /**
   * @function 修改账单数据
   * @param data 新的数据
   */
  async putEditBill(data: EditBill) {
    return this.service.billService.putEditBill(data);
  }

  /**
   * @function 删除账单
   * @param id 需要删除的账单对应的id
   */
  async deleteBill(id: number) {
    return this.service.billService.deleteBill(id);
  }
}

export default BillController;
