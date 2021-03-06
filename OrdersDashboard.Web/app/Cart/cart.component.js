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
var cart_data_service_1 = require('../Services/cart.data.service');
var logger_service_1 = require('../Services/logger.service');
var CartModel_1 = require('../Models/CartModel');
var CartComponent = (function () {
    function CartComponent(dataAccessService, loggerService) {
        this.dataAccessService = dataAccessService;
        this.loggerService = loggerService;
        this.cart = new CartModel_1.CartModel();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataAccessService.getCart()
            .subscribe(function (cart) {
            _this.loggerService.logInfo(cart, 'Getting Cart');
            _this.cart = cart;
        });
    };
    CartComponent.prototype.onRemoveProduct = function (productIdentifier) {
        var _this = this;
        this.dataAccessService.removeProduct(productIdentifier)
            .subscribe(function (cart) {
            _this.loggerService.logInfo(cart, "Removing Product: " + productIdentifier);
            _this.cart = cart;
        });
    };
    CartComponent.prototype.clearCart = function () {
        var _this = this;
        this.dataAccessService.clearCart()
            .subscribe(function (cart) {
            _this.loggerService.logInfo(cart, 'Clearing Cart');
            _this.cart = cart;
        });
    };
    CartComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-cart',
            templateUrl: 'cart.html'
        }), 
        __metadata('design:paramtypes', [cart_data_service_1.CartDataService, logger_service_1.LoggerService])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map