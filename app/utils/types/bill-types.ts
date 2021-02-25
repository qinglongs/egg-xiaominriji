/**
 * 账单分页参数
 */
export type GetBillListParams = {
  page: number;
  size: number;
};

/**
 * 添加账单
 */
export type AddBill = {
  date: string;
  // 0 支付宝 1 微信 2 人民币
  type: 0 | 1 | 2,
  money: number;
};


/**
 * 修改账单
 */
export type EditBill = {
  id: number;
} & AddBill;
