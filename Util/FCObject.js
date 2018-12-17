// @ts-ignore
var FCObject = /** @class */ (function () {
    function FCObject() {
        this.modelCustomPropertyMapper = function () { return {}; };
        this.modelContainerPropertyGenericClass = function () { return {}; };
    }
    FCObject.prototype.modelAddProperty = function (data) {
        if (data) {
            for (var key in data) {
                var propertyKey = key;
                if (this.hasOwnProperty('modelCustomPropertyMapper')) {
                    propertyKey = this.modelCustomPropertyMapper()[key] ? this.modelCustomPropertyMapper()[key] : key;
                }
                if (this.hasOwnProperty('modelContainerPropertyGenericClass')) {
                    if (this.modelContainerPropertyGenericClass()[propertyKey]) {
                        var Class = this.modelContainerPropertyGenericClass()[propertyKey];
                        if (data[key] instanceof Array) {
                            this[propertyKey] = [];
                            for (var _i = 0, _a = data[key]; _i < _a.length; _i++) {
                                var eachData = _a[_i];
                                var obj = new Class(eachData);
                                this[propertyKey].push(obj);
                            }
                        }
                        else {
                            this[propertyKey] = new Class(data[key]);
                        }
                        continue;
                    }
                }
                this[propertyKey] = data[key];
            }
        }
    };
    return FCObject;
}());
