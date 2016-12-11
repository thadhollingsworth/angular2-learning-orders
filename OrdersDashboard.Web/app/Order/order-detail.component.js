"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var OrderModel_1 = require('../Models/OrderModel');
var OrderDetailComponent = (function () {
    function OrderDetailComponent() {
        this.order = new OrderModel_1.OrderModel();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', OrderModel_1.OrderModel)
    ], OrderDetailComponent.prototype, "order", void 0);
    OrderDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'order-detail',
            templateUrl: 'order-detail.html'
        }), 
        __metadata('design:paramtypes', [])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map