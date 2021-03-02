import 'egg';

// mysql 请求方法
type MysqlMethod = (table: string, data?: { [key: string]: any }) => Promise<any>;

// mysql事务
type Transaction = () => Promsie<any>;

declare module 'egg' {
    interface Application {
        mysql: {
            get: MysqlMethod;
            insert: MysqlMethod;
            select: MysqlMethod;
            count: MysqlMethod;
            update: MysqlMethod;
            delete: MysqlMethod;
            beginTransaction: Transaction;
        };
        jwt: any;
    }
}
