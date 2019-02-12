//
//Created by ESJsonFormatForMac-TS-ZSX on 19/02/12.
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
var FCUserModel = /** @class */ (function (_super) {
    __extends(FCUserModel, _super);
    function FCUserModel(data) {
        var _this = _super.call(this, data) || this;
        _this.modelCustomPropertyMapper = function () {
            return {};
        };
        _this.modelContainerPropertyGenericClass = function () {
            return {
                'BIRTHDAY': FCBirthdayModel,
            };
        };
        if (!data)
            return _this;
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        return _this;
    }
    return FCUserModel;
}(FCObject));
// @ts-ignore
var FCBirthdayModel = /** @class */ (function (_super) {
    __extends(FCBirthdayModel, _super);
    function FCBirthdayModel(data) {
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
    return FCBirthdayModel;
}(FCObject));
