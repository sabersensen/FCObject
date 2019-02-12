//
//Created by ESJsonFormatForMac-TS-ZSX on 19/02/12.
//


// @ts-ignore
class FCUserModel extends FCObject{

    NAME: string;

    MALE: boolean;

    AGE: number;

    BIRTHDAY: FCBirthdayModel;

    PHONE: Array<any>;

    constructor(data: object){
        super(data);
        if (!data) return;
        // @ts-ignore
        this.modelAddProperty.call(this, data);
    }

    modelCustomPropertyMapper = function () {
       return{
       }
    }

    modelContainerPropertyGenericClass = function () {
       return{
            'BIRTHDAY':FCBirthdayModel,
       }
    }

}
// @ts-ignore
class FCBirthdayModel extends FCObject{

    day: number;

    month: number;

    year: number;

    constructor(data: object){
        super(data);
        if (!data) return;
        // @ts-ignore
        this.modelAddProperty.call(this, data);
    }

    modelCustomPropertyMapper = function () {
       return{
       }
    }

    modelContainerPropertyGenericClass = function () {
       return{
       }
    }

}

