import { Service } from 'egg';
import { GetBillListParams, AddBill, EditBill } from '../utils/types/bill-types';

class BillService extends Service {
  /**
   * @function 获取账单列表数据
   * @param params 分页参数
   */
  async getBillList(params: GetBillListParams) {
    console.log('获取账单列表数据', params);
  }

  /**
   * @function 新增账单数据
   * @param data 账单数据
   */
  async postAddBill(data: AddBill) {
    console.log('新增账单', data);
  }

  /**
   * @function 修改订单数据
   * @param data 新的数据
   */
  async putEditBill(data: EditBill) {
    console.log('修改账单', data);
  }

  /**
   * @function 删除账单
   * @param id 需要删除的账单对应的id
   */
  async deleteBill(id: number) {
    console.log('删除账单', id);
  }
}

export default BillService;
