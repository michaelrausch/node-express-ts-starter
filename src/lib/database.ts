import * as mysql from "mysql"
import * as config from "../config/db"

export class DBInstance {
    private configInstance = config.DBConfig.getConfig()
    private static _instance: DBInstance = new DBInstance()

    private connectionPool = mysql.createPool({
        connectionLimit:    this.configInstance.connectionLimit,
        host:               this.configInstance.host,
        user:               this.configInstance.user,
        password:           this.configInstance.password,
        database:           this.configInstance.database
    });

    constructor(){
        if(DBInstance._instance){
            throw new Error("Error: Instantiation failed: Use DBInstance.getInstance() OR DBInstance.getConnection() instead of new.");
        }
        DBInstance._instance = this;
    }

    static getInstance(){
        return DBInstance._instance;
    }

    static getConnection(callback: (err: mysql.IError, conn: mysql.IConnection) => void){
        DBInstance.getInstance().connectionPool.getConnection(callback);
    }
}
