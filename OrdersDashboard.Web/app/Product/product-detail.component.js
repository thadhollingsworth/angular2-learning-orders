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
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var ProductModel_1 = require('../Models/ProductModel');
var product_data_service_1 = require('../Services/product.data.service');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(dataAccessService, router, location) {
        this.dataAccessService = dataAccessService;
        this.router = router;
        this.location = location;
        /*
            assume the search results only have some of the product data
            and you need to get the single product details from the server when navigating
            this is really all about me wanting to explore dynamic routing which is the jump off
            from the product list page
        */
        this.product = new ProductModel_1.ProductModel();
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.params
            .switchMap(function (params) { return _this.dataAccessService.getProduct(params['productIdentifier']); })
            .subscribe(function (product) {
            _this.product = product;
        });
    };
    ProductDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-detail',
            templateUrl: 'product-detail.html'
        }), 
        __metadata('design:paramtypes', [product_data_service_1.ProductDataService, router_1.ActivatedRoute, common_1.Location])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map