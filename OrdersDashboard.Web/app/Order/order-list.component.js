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
var order_data_service_1 = require('../Services/order.data.service');
var logger_service_1 = require('../Services/logger.service');
var OrderListComponent = (function () {
    function OrderListComponent(dataAccessService, loggerService) {
        this.dataAccessService = dataAccessService;
        this.loggerService = loggerService;
        this.orders = [];
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataAccessService.getCurrentOrders()
            .subscribe(function (orders) {
            _this.loggerService.logInfo(orders);
            _this.orders = orders;
        });
    };
    OrderListComponent.prototype.onSelect = function (order) {
        this.selectedOrder = order;
    };
    OrderListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'order-list.html'
        }), 
        __metadata('design:paramtypes', [order_data_service_1.OrderDataService, logger_service_1.LoggerService])
    ], OrderListComponent);
    return OrderListComponent;
}());
exports.OrderListComponent = OrderListComponent;
//# sourceMappingURL=order-list.component.js.map