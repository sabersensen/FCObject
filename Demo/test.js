
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

data = {
    "responseData" : {
        "action" : "get",
        "callbackId" : "http://api-test.fclassroom.cn/so-learning/api/learning/exam-info1545028961151",
        "data" : {
            "code" : 0,
            "data" : {
                "absentCount" : 1,
                "absentStudentNameList" : [
                    "特化13"
                ],
                "artsOrScienceFlag" : false,
                "artsOrScienceTotalScore" : 100,
                "clzssCount" : 8,
                "examId" : 380220,
                "examInfoList" : null,
                "examName" : "混合班数学试卷1",
                "examType" : 0,
                "groupMode" : null,
                "groupType" : 1,
                "haveInterimFlag" : 1,
                "markRuleFinishedFlag" : false,
                "markingType" : 1,
                "notUploadStudentCount" : 3,
                "notUploadedClzssNameList" : [
                    "3班",
                    "4班",
                    "5班",
                    "6班"
                ],
                "paperIds" : "339801",
                "questionCount" : null,
                "specialSchoolOfEnglish" : false,
                "specialTotalScore" : null,
                "studentCount" : 29,
                "subjectInfoList" : [
                    {
                        "examId" : 380220,
                        "examName" : "混合班数学试卷1",
                        "score" : 100,
                        "subjectBaseId" : 1,
                        "subjectName" : "数学"
                    }
                ],
                "totalScore" : 100,
                "updateTime" : "2018-11-30 12:16:32",
                "uploadClzssCount" : 4,
                "uploadClzssList" : [
                    {
                        "baseGradeValue" : 4,
                        "clzssName" : "1班",
                        "clzssType" : 1,
                        "finishAt" : null,
                        "finished" : false,
                        "fullName" : "1班",
                        "gradeId" : 6604,
                        "id" : 64076,
                        "schoolId" : 3296,
                        "schoolYear" : 2018,
                        "sort" : 3,
                        "startAt" : null,
                        "teachingSubjects" : null
                    },
                    {
                        "baseGradeValue" : 4,
                        "clzssName" : "1班",
                        "clzssType" : 2,
                        "finishAt" : null,
                        "finished" : false,
                        "fullName" : "数学层_1班",
                        "gradeId" : 6604,
                        "id" : 64077,
                        "schoolId" : 3296,
                        "schoolYear" : 2018,
                        "sort" : 4,
                        "startAt" : null,
                        "teachingSubjects" : null
                    },
                    {
                        "baseGradeValue" : 4,
                        "clzssName" : "2班",
                        "clzssType" : 2,
                        "finishAt" : null,
                        "finished" : false,
                        "fullName" : "数学层_2班",
                        "gradeId" : 6604,
                        "id" : 64078,
                        "schoolId" : 3296,
                        "schoolYear" : 2018,
                        "sort" : 17,
                        "startAt" : null,
                        "teachingSubjects" : null
                    },
                    {
                        "baseGradeValue" : 4,
                        "clzssName" : "2班",
                        "clzssType" : 1,
                        "finishAt" : null,
                        "finished" : false,
                        "fullName" : "2班",
                        "gradeId" : 6604,
                        "id" : 64075,
                        "schoolId" : 3296,
                        "schoolYear" : 2018,
                        "sort" : 19,
                        "startAt" : null,
                        "teachingSubjects" : null
                    }
                ],
                "uploadStudentCount" : 23,
                "uploadedClzssNameList" : [
                    "1班",
                    "数学层_1班",
                    "数学层_2班",
                    "2班"
                ],
                "useMarkRuleFlag" : false
            },
            "message" : "success",
            "total" : null
        },
        "errno" : 0,
        "msg" : "请求成功",
        "service" : "http"
    },
    "responseId" : "cb_8_1545028961151"
};

var model = new FCRootClass(data);

console.log(model);
