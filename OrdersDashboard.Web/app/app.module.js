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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
//App Components
var dashboard_component_1 = require('./Dashboard/dashboard.component');
//TODO: break these out into modules ? [Order/Cart/Product]
var order_list_component_1 = require('./Order/order-list.component');
var order_detail_component_1 = require('./Order/order-detail.component');
var product_landing_component_1 = require('./Product/product-landing.component');
var product_search_component_1 = require('./Product/product-search.component');
var product_detail_component_1 = require('./Product/product-detail.component');
var cart_landing_component_1 = require('./Cart/cart-landing.component');
var cart_component_1 = require('./Cart/cart.component');
var dataaccess_service_1 = require('./Services/dataaccess.service');
var logger_service_1 = require('./Services/logger.service');
var appRoutes = [
    { path: 'orders', component: order_list_component_1.OrderListComponent },
    { path: 'order/:orderNumber', component: order_detail_component_1.OrderDetailComponent },
    { path: 'cart', component: cart_landing_component_1.CartLandingComponent },
    { path: 'products', component: product_landing_component_1.ProductLandingComponent },
    { path: 'product/:productIdentifier', component: product_detail_component_1.ProductDetailComponent },
    { path: '', component: dashboard_component_1.DashboardComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            exports: [router_1.RouterModule],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                order_detail_component_1.OrderDetailComponent,
                order_list_component_1.OrderListComponent,
                product_detail_component_1.ProductDetailComponent,
                product_search_component_1.ProductSearchComponent,
                product_landing_component_1.ProductLandingComponent,
                cart_component_1.CartComponent,
                cart_landing_component_1.CartLandingComponent
            ],
            providers: [
                logger_service_1.LoggerService,
                dataaccess_service_1.DataAccessService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map