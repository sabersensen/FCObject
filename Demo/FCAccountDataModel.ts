// @ts-ignore
class FCAccountDataModel extends FCBaseDataModel{

    accountModel:FCAccountModel;

    constructor(data:object){
        super(data);
        // @ts-ignore
        this.modelAddProperty.call(this,data);
    }

    modelCustomPropertyMapper = function () {
        return{
            "data":"accountModel",
        }
    }

    modelContainerPropertyGenericClass = function (){
        return{
            "accountModel":FCAccountModel,
        }
    }

}

// @ts-ignore
class FCAccountModel extends FCObject{
    /*用户id*/
    userId:number;
    /*用户名*/
    userName:string;

    students:Array<FCStudentModel>;

    constructor(data:object){
        super(data);
        // @ts-ignore
        this.modelAddProperty.call(this,data);
    }

    modelCustomPropertyMapper = function () {
        return{
            "name":"userName",
        }
    }

    modelContainerPropertyGenericClass = function (){
        return{
            "students":FCStudentModel,
        }
    }

}


// @ts-ignore
class FCStudentModel extends FCObject{
    studentId:number;
    studentName:string;

    constructor(data:object){
        super(data);
        // @ts-ignore
        this.modelAddProperty.call(this,data);
    }

    modelCustomPropertyMapper = function () {
        return{
            "id":"studentId",
            "name":"studentName"
        }
    }

}


