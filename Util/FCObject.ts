// @ts-ignore
interface FCObjectInterface {

    /* 遍历添加属性*/
    modelAddProperty:(data:any)=> void;
    /* 对数据参数改为实体参数 {'data':'model'}*/
    modelCustomPropertyMapper:()=> object;
    /* 定义实体参数 类 {'model':'FCObject'}*/
    modelContainerPropertyGenericClass:()=> object;

}

// @ts-ignore
class FCObject implements FCObjectInterface{
     modelAddProperty(data:any){
        if (data){
            for (let key in data){
                var propertyKey = key;
                if (this.hasOwnProperty('modelCustomPropertyMapper')) {
                    propertyKey = this.modelCustomPropertyMapper()[key]?this.modelCustomPropertyMapper()[key]:key;
                }
                if (this.hasOwnProperty('modelContainerPropertyGenericClass')) {
                    if (this.modelContainerPropertyGenericClass()[propertyKey]){
                        let Class = this.modelContainerPropertyGenericClass()[propertyKey];
                        if (data[key] instanceof Array) {
                            this[propertyKey] = [];
                            for (let eachData of data[key]){
                                var obj = new Class(eachData);
                                this[propertyKey].push(obj);
                            }
                        }else {
                            this[propertyKey] = new Class(data[key]);
                        }
                        continue;
                    }
                }
                this[propertyKey] = data[key];
            }
        }
    }

    modelCustomPropertyMapper = function () {return{}}

    modelContainerPropertyGenericClass = function () {return{}}

}



