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
var product_landing_component_1 = require('./product-landing.component');
var product_search_component_1 = require('./product-search.component');
var product_detail_component_1 = require('./product-detail.component');
var product_data_service_1 = require('../Services/product.data.service');
var productRoutes = [
    { path: 'products', component: product_landing_component_1.ProductLandingComponent },
    { path: 'product/:productIdentifier', component: product_detail_component_1.ProductDetailComponent }
];
//Note: could create separate .ts for route module as the docs are showing, but this is an exploration no actual implementaiton - i know it can be done :-)
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(productRoutes)
            ],
            declarations: [
                product_detail_component_1.ProductDetailComponent,
                product_search_component_1.ProductSearchComponent,
                product_landing_component_1.ProductLandingComponent
            ],
            exports: [router_1.RouterModule],
            providers: [product_data_service_1.ProductDataService]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map