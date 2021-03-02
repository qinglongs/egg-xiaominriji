/** 用户登录 */
export type UserLogin = {
  username: string;
  password: string;
};

/** 用户注册 */
export type UserRegister = UserLogin;

/** 编辑用户 */
export type EditUser = {
  id: number;
  username: string;
  password: string;
};
