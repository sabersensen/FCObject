
let data = {
    'error_code':1,
    'error_msg':'测试',
    'data':{
        userId:123,
        name:'测试者',
        students:[
            {id:1,name:'学生1'},
            {id:2,name:'学生2'}
        ]
    }
}
var dataModel = new FCAccountDataModel(data);

console.log(dataModel);

/*使用ESMac 工具生成TS文件
 */

data = {"AGE":-26,"BIRTHDAY":{"day":8,"month":8,"year":2000},"MALE":true,"NAME":"宝宝","PHONE":["15888888888","15222222222"]}
;

var model = new FCUserModel(data);

console.log(model);
