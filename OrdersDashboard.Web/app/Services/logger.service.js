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
var LoggerService = (function () {
    function LoggerService() {
    }
    //TODO: bring in something like toaster?
    LoggerService.prototype.logError = function (errorObject, message) {
        if (message === void 0) { message = null; }
        if (message != null) {
            message = 'Error: ' + message;
        }
        else {
            message = 'Error';
        }
        console.log(message, errorObject);
    };
    //TODO: pass in configuration and if debug then info/warn are written
    LoggerService.prototype.logInfo = function (errorObject, message) {
        if (message === void 0) { message = null; }
        if (message != null) {
            message = 'Info: ' + message;
        }
        else {
            message = 'Info';
        }
        console.log(message, errorObject);
    };
    LoggerService.prototype.logWarning = function (errorObject, message) {
        if (message === void 0) { message = null; }
        if (message != null) {
            message = 'Warn: ' + message;
        }
        else {
            message = 'Warn';
        }
        console.log(message, errorObject);
    };
    LoggerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], LoggerService);
    return LoggerService;
}());
exports.LoggerService = LoggerService;
//# sourceMappingURL=logger.service.js.map