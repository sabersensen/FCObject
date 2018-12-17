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
                'responseData': Responsedata,
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
var Responsedata = /** @class */ (function (_super) {
    __extends(Responsedata, _super);
    function Responsedata(data) {
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
    return Responsedata;
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
                'data': Data,
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
var Data = /** @class */ (function (_super) {
    __extends(Data, _super);
    function Data(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'uploadClzssList': Uploadclzsslist,
                'subjectInfoList': Subjectinfolist,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return Data;
}(FCObject));
// @ts-ignore
var Subjectinfolist = /** @class */ (function (_super) {
    __extends(Subjectinfolist, _super);
    function Subjectinfolist(data) {
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
    return Subjectinfolist;
}(FCObject));
// @ts-ignore
var Uploadclzsslist = /** @class */ (function (_super) {
    __extends(Uploadclzsslist, _super);
    function Uploadclzsslist(data) {
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
    return Uploadclzsslist;
}(FCObject));
