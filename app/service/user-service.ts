import { Service } from 'egg';
import { UserRegister, UserLogin, EditUser } from '../utils/types/user-types';

const USER = 'user';

class UserService extends Service {


  /**
   * @function 登录
   * @param data 用户登录
   */
  async login(data: UserLogin) {
    const res = await this.ctx.app.mysql.get(USER, data);
    return res;
  }

  /**
   * @function 用户注册
   * @param data 新用户帐号数据
   */
  async register(data: UserRegister) {
    await this.ctx.app.mysql.insert(USER, data);

    const response = await this.ctx.app.mysql.get(USER, data);

    return response.id;
  }

  /**
   * @function 编辑用户
   * @param data 需要编辑的用户数据
   */
  async editUser(data: EditUser) {
    await this.ctx.app.mysql.update(USER, data);
  }

  /**
   * @function 注销用户
   */
  async unRegister(id: number) {
    await this.ctx.app.mysql.delete(USER, { id });
  }
}

export default UserService;
