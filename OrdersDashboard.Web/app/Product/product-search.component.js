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
var dataaccess_service_1 = require('../Services/dataaccess.service');
var ProductSearchComponent = (function () {
    function ProductSearchComponent() {
        this.searchResults = [];
    }
    //TODO: bind to the input where user types search term
    ProductSearchComponent.prototype.findProducts = function () {
        console.log(this.searchTerm);
    };
    ProductSearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'product-search',
            providers: [dataaccess_service_1.DataAccessService],
            templateUrl: 'product-search.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ProductSearchComponent);
    return ProductSearchComponent;
}());
exports.ProductSearchComponent = ProductSearchComponent;
//# sourceMappingURL=product-search.component.js.map