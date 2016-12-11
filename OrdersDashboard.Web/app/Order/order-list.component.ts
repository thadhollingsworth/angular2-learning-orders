import { Component, OnInit } from '@angular/core';

import { DataAccessService } from '../Services/dataaccess.service';
import { LoggerService } from '../Services/logger.service';

import { OrderModel } from '../Models/OrderModel';

@Component({
    moduleId: module.id,
    templateUrl: 'order-list.html'
})
export class OrderListComponent implements OnInit {
    orders: OrderModel[] = [];
    errorMessage: string;

    constructor(private dataAccessService: DataAccessService,
        private loggerService: LoggerService) {
    }

    ngOnInit() {
        this.dataAccessService.getCurrentOrders()
            .subscribe(
            orders => {
                this.loggerService.logInfo(orders);
                this.orders = orders
            },
            error => this.errorMessage = error
            );

    }
}