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
var cart_landing_component_1 = require('./cart-landing.component');
var cart_component_1 = require('./cart.component');
var cart_products_component_1 = require('./cart-products.component');
var cart_data_service_1 = require('../Services/cart.data.service');
var productRoutes = [
    { path: 'cart', component: cart_landing_component_1.CartLandingComponent }
];
var CartModule = (function () {
    function CartModule() {
    }
    CartModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(productRoutes)
            ],
            declarations: [
                cart_component_1.CartComponent,
                cart_landing_component_1.CartLandingComponent,
                cart_products_component_1.CartProductsComponent
            ],
            exports: [router_1.RouterModule],
            providers: [cart_data_service_1.CartDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], CartModule);
    return CartModule;
}());
exports.CartModule = CartModule;
//# sourceMappingURL=cart.module.js.map