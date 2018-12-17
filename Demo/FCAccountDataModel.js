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
var FCAccountDataModel = /** @class */ (function (_super) {
    __extends(FCAccountDataModel, _super);
    function FCAccountDataModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {
                "data": "accountModel",
            };
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                "accountModel": FCAccountModel,
            };
        };
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCAccountDataModel;
}(FCBaseDataModel));
// @ts-ignore
var FCAccountModel = /** @class */ (function (_super) {
    __extends(FCAccountModel, _super);
    function FCAccountModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {
                "name": "userName",
            };
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                "students": FCStudentModel,
            };
        };
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCAccountModel;
}(FCObject));
// @ts-ignore
var FCStudentModel = /** @class */ (function (_super) {
    __extends(FCStudentModel, _super);
    function FCStudentModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {
                "id": "studentId",
                "name": "studentName"
            };
        };
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCStudentModel;
}(FCObject));
