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
//App Feature Modules
var product_module_1 = require('./Product/product.module');
var order_module_1 = require('./Order/order.module');
var cart_module_1 = require('./Cart/cart.module');
//App Components
var dashboard_component_1 = require('./Dashboard/dashboard.component');
//App Services
var logger_service_1 = require('./Services/logger.service');
var base_data_service_1 = require('./Services/base.data.service');
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent }
];
//TODO: one some appconfig service
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(appRoutes),
                product_module_1.ProductModule,
                order_module_1.OrderModule,
                cart_module_1.CartModule
            ],
            exports: [router_1.RouterModule],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent
            ],
            providers: [
                logger_service_1.LoggerService,
                base_data_service_1.BaseDataService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map