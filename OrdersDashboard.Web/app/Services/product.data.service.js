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
var ProductDataService = (function (_super) {
    __extends(ProductDataService, _super);
    function ProductDataService(http, loggerService) {
        var _this = this;
        _super.call(this, http, loggerService);
        this.http = http;
        this.loggerService = loggerService;
        this.findProducts = function (searchTerm) {
            return _this.http.get(_this.actionUrl + '/find/' + searchTerm)
                .map(function (response) { return response.json(); })
                .catch(function (error) {
                _this.loggerService.logError(error, 'ProductDataService.findProducts');
                return Rx_1.Observable.throw(error);
            });
        };
        this.getProduct = function (productIdentifier) {
            return _this.http.get(_this.actionUrl + '/' + productIdentifier)
                .map(function (response) {
                return response.json();
            })
                .catch(function (error) {
                _this.loggerService.logError(error, 'ProductDataService.getProduct');
                return Rx_1.Observable.throw(error);
            })
                .toPromise();
        };
        this.actionUrl = this.actionUrl + 'products';
    }
    ProductDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, logger_service_1.LoggerService])
    ], ProductDataService);
    return ProductDataService;
}(base_data_service_1.BaseDataService));
exports.ProductDataService = ProductDataService;
//# sourceMappingURL=product.data.service.js.map