//
//Created by ESJsonFormatForMac-TS-ZSX on 18/12/17.
//


// @ts-ignore
class FCRootClass extends FCObject{

    responseId: string;

    responseData: FCResponseModel;

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
            'responseData':FCResponseModel,
       }
    }

}
// @ts-ignore
class FCResponseModel extends FCObject{

    callbackId: string;

    data: FCDataModel;

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
            'data':FCDataModel,
       }
    }

}


// @ts-ignore
class FCDataModel extends FCObject{

    code: number;

    data: FCData;

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
            'data':FCData,
       }
    }

}


// @ts-ignore
class FCData extends FCObject{

    notUploadStudentCount: number;

    uploadedClzssNameList: Array<any>;

    groupMode: string;

    totalScore: number;

    uploadClzssCount: number;

    artsOrScienceFlag: boolean;

    updateTime: string;

    examType: number;

    absentCount: number;

    uploadClzssList: Array<FCUploadClzssModel>;

    uploadStudentCount: number;

    groupType: number;

    questionCount: string;

    subjectInfoList: Array<FCSubjectModel>;

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
            'uploadClzssList':FCUploadClzssModel,
            'subjectInfoList':FCSubjectModel,
       }
    }

}


// @ts-ignore
class FCSubjectModel extends FCObject{

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
class FCUploadClzssModel extends FCObject{

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

