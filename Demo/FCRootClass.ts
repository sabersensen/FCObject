//
//Created by ESJsonFormatForMac-TS-ZSX on 18/12/17.
//


// @ts-ignore
class FCRootClass extends FCObject{

    responseId: string;

    responseData: Responsedata;

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
            'responseData':Responsedata,
       }
    }

}
// @ts-ignore
class Responsedata extends FCObject{

    callbackId: string;

    data: FCData;

    errno: number;

    msg: string;

    service: string;

    action: string;

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
            'data':FCData,
       }
    }

}


// @ts-ignore
class FCData extends FCObject{

    code: number;

    data: Data;

    message: string;

    total: string;

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
            'data':Data,
       }
    }

}


// @ts-ignore
class Data extends FCObject{

    notUploadStudentCount: number;

    uploadedClzssNameList: Array<any>;

    groupMode: string;

    totalScore: number;

    uploadClzssCount: number;

    artsOrScienceFlag: boolean;

    updateTime: string;

    examType: number;

    absentCount: number;

    uploadClzssList: Array<Uploadclzsslist>;

    uploadStudentCount: number;

    groupType: number;

    questionCount: string;

    subjectInfoList: Array<Subjectinfolist>;

    paperIds: string;

    notUploadedClzssNameList: Array<any>;

    markRuleFinishedFlag: boolean;

    specialSchoolOfEnglish: boolean;

    clzssCount: number;

    examInfoList: string;

    examName: string;

    markingType: number;

    absentStudentNameList: Array<any>;

    haveInterimFlag: number;

    specialTotalScore: string;

    studentCount: number;

    useMarkRuleFlag: boolean;

    examId: number;

    artsOrScienceTotalScore: number;

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
            'uploadClzssList':Uploadclzsslist,
            'subjectInfoList':Subjectinfolist,
       }
    }

}


// @ts-ignore
class Subjectinfolist extends FCObject{

    examId: number;

    examName: string;

    score: number;

    subjectName: string;

    subjectBaseId: number;

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


// @ts-ignore
class Uploadclzsslist extends FCObject{

    clzssType: number;

    ID: number;

    schoolYear: number;

    teachingSubjects: string;

    schoolId: number;

    baseGradeValue: number;

    clzssName: string;

    finishAt: string;

    fullName: string;

    startAt: string;

    finished: boolean;

    gradeId: number;

    sort: number;

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

