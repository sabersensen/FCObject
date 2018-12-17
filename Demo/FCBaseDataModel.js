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
var FCBaseDataModel = /** @class */ (function (_super) {
    __extends(FCBaseDataModel, _super);
    /*构建*/
    function FCBaseDataModel(data) {
        var _this = 
        // @ts-ignore
        _super.call(this, data) || this;
        if (!data) {
            return _this;
        }
        // @ts-ignore
        _this.modelAddProperty.call(_this, data);
        _this.isSuccess = _this.error_code == 1;
        return _this;
    }
    return FCBaseDataModel;
}(FCObject));
