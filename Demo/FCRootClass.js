//
//Created by ESJsonFormatForMac-TS-ZSX on 18/12/17.
//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// @ts-ignore
var FCRootClass = /** @class */ (function (_super) {
    __extends(FCRootClass, _super);
    function FCRootClass(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'responseData': FCResponseModel,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCRootClass;
}(FCObject));
// @ts-ignore
var FCResponseModel = /** @class */ (function (_super) {
    __extends(FCResponseModel, _super);
    function FCResponseModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'data': FCDataModel,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCResponseModel;
}(FCObject));
// @ts-ignore
var FCDataModel = /** @class */ (function (_super) {
    __extends(FCDataModel, _super);
    function FCDataModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'data': FCData,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCDataModel;
}(FCObject));
// @ts-ignore
var FCData = /** @class */ (function (_super) {
    __extends(FCData, _super);
    function FCData(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'uploadClzssList': FCUploadClzssModel,
                'subjectInfoList': FCSubjectModel,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCData;
}(FCObject));
// @ts-ignore
var FCSubjectModel = /** @class */ (function (_super) {
    __extends(FCSubjectModel, _super);
    function FCSubjectModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {};
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCSubjectModel;
}(FCObject));
// @ts-ignore
var FCUploadClzssModel = /** @class */ (function (_super) {
    __extends(FCUploadClzssModel, _super);
    function FCUploadClzssModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {};
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCUploadClzssModel;
}(FCObject));
