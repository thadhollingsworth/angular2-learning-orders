"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var logger_service_1 = require('../Services/logger.service');
var base_data_service_1 = require('../Services/base.data.service');
var CartDataService = (function (_super) {
    __extends(CartDataService, _super);
    function CartDataService(http, loggerService) {
        var _this = this;
        _super.call(this, http, loggerService);
        this.http = http;
        this.loggerService = loggerService;
        this.getCart = function () {
            return _this.http.get(_this.actionUrl)
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.loggerService.logError(error, 'CartDataService.getCart');
                return Rx_1.Observable.throw(error);
            });
        };
        this.addProduct = function (product) {
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers });
            return _this.http.post(_this.actionUrl + '/addproduct', JSON.stringify(product), options)
                .catch(function (error) {
                _this.loggerService.logError(error, 'CartDataService.addProduct');
                return Rx_1.Observable.throw(error);
            });
        };
        this.removeProduct = function (productIdentifier) {
            return _this.http.get(_this.actionUrl + '/removeproduct/' + productIdentifier)
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.loggerService.logError(error, 'CartDataService.removeProduct');
                return Rx_1.Observable.throw(error);
            });
        };
        this.clearCart = function () {
            return _this.http.get(_this.actionUrl + '/clear/')
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.loggerService.logError(error, 'CartDataService.clearCart');
                return Rx_1.Observable.throw(error);
            });
        };
        this.actionUrl = this.actionUrl + 'carts';
    }
    CartDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
    ], CartDataService);
    return CartDataService;
}(base_data_service_1.BaseDataService));
exports.CartDataService = CartDataService;
//# sourceMappingURL=cart.data.service.js.map