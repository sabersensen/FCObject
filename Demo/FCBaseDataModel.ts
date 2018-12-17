// @ts-ignore
class FCBaseDataModel extends FCObject {
    /*是否成功*/
    isSuccess: boolean;
    /*code*/
    error_code: number;
    /*接口返回信息*/
    error_msg: string;

    /*构建*/
    constructor(data: object) {
        // @ts-ignore
        super(data);
        if (!data) {
            return;
        }
        // @ts-ignore
        this.modelAddProperty.call(this, data);
        this.isSuccess = this.error_code == 1;
    }
}
