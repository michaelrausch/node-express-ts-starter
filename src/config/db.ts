export class DBConfig {
    public host             = "";
    public user             = "";
    public password         = "";
    public database         = "";
    public connectionLimit  = 0;

    static getConfig(){
        return new DBConfig();
    }
}
