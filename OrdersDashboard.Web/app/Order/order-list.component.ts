import { Component, OnInit } from '@angular/core';

import { OrderDataService } from '../Services/order.data.service';
import { LoggerService } from '../Services/logger.service';

import { OrderModel } from '../Models/OrderModel';

@Component({
    moduleId: module.id,
    templateUrl: 'order-list.html'
})
export class OrderListComponent implements OnInit {
    orders: OrderModel[] = [];
    selectedOrder: OrderModel;
    errorMessage: string;

    constructor(private dataAccessService: OrderDataService,
        private loggerService: LoggerService) {
    }

    ngOnInit() {
        this.dataAccessService.getCurrentOrders()
            .subscribe(
            orders => {
                this.loggerService.logInfo(orders);
                this.orders = orders
            },
            error => { this.loggerService.logError(error, "OrderList:ngOnInit"); }
            );
    }

    onSelect(order: OrderModel): void {
        this.selectedOrder = order;
    }
}