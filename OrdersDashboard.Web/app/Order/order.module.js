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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var order_list_component_1 = require('./order-list.component');
var order_detail_component_1 = require('./order-detail.component');
var order_data_service_1 = require('../Services/order.data.service');
var productRoutes = [
    { path: 'orders', component: order_list_component_1.OrderListComponent },
    { path: 'order/:orderNumber', component: order_detail_component_1.OrderDetailComponent }
];
var OrderModule = (function () {
    function OrderModule() {
    }
    OrderModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(productRoutes)
            ],
            declarations: [
                order_list_component_1.OrderListComponent,
                order_detail_component_1.OrderDetailComponent
            ],
            exports: [router_1.RouterModule],
            providers: [order_data_service_1.OrderDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], OrderModule);
    return OrderModule;
}());
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map