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
var router_1 = require('@angular/router');
require('rxjs/add/operator/switchMap');
var OrderModel_1 = require('../Models/OrderModel');
var dataaccess_service_1 = require('../Services/dataaccess.service');
var OrderDetailComponent = (function () {
    function OrderDetailComponent(dataAccessService, router) {
        this.dataAccessService = dataAccessService;
        this.router = router;
        this.order = new OrderModel_1.OrderModel();
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .switchMap(function (params) { return _this.dataAccessService.getOrder(params['orderNumber']); })
            .subscribe(function (order) {
            _this.order = order;
        });
    };
    OrderDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'order-detail.html'
        }), 
        __metadata('design:paramtypes', [dataaccess_service_1.DataAccessService, router_1.ActivatedRoute])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map