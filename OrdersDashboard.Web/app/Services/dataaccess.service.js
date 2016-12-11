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
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
var logger_service_1 = require('../Services/logger.service');
var DataAccessService = (function () {
    //private headers: Headers;
    //TODO: break out to separate data services per type?
    function DataAccessService(http, loggerService) {
        var _this = this;
        this.http = http;
        this.loggerService = loggerService;
        //public GetCartProducts = (cartId: string): Observable<ProductModel[]> => {
        //    return this.http.get(this.actionUrl + '/carts/' + cartId + '/products')
        //        .map((response: Response) => <ProductModel[]>response.json())
        //        .catch(this.handleError);
        //}
        this.getCurrentOrders = function () {
            return _this.http.get(_this.actionUrl + '/orders')
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        this.getOrder = function (orderNumber) {
            return _this.http.get(_this.actionUrl + '/orders/' + orderNumber)
                .map(function (response) {
                return response.json();
            })
                .catch(_this.handleError)
                .toPromise();
        };
        this.findProducts = function (searchTerm) {
            return _this.http.get(_this.actionUrl + '/products/find/' + searchTerm)
                .map(function (response) { return response.json(); })
                .catch(_this.handleError);
        };
        //public getOrder = (orderNumber: string): Observable<OrderModel> => {
        //    return this.http.get(this.actionUrl + '/orders/' + orderNumber)
        //        .map((response: Response) => <OrderModel>response.json())
        //        .catch(this.handleError);
        //}
        this.getProduct = function (productIdentifier) {
            return _this.http.get(_this.actionUrl + '/products/' + productIdentifier)
                .map(function (response) {
                return response.json();
            })
                .catch(_this.handleError)
                .toPromise();
        };
        this.actionUrl = 'http://localhost:51435/api';
    }
    DataAccessService.prototype.handleError = function (error) {
        this.loggerService.logError(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    DataAccessService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
    ], DataAccessService);
    return DataAccessService;
}());
exports.DataAccessService = DataAccessService;
//# sourceMappingURL=dataaccess.service.js.map