import { Component, OnInit } from '@angular/core';

import { DataAccessService } from '../Services/dataaccess.service';
import { OrderModel } from '../Models/OrderModel';

@Component({
    moduleId: module.id,
    providers: [DataAccessService],
    templateUrl: 'order-list.html'
})
export class OrderListComponent implements OnInit {
    orders: OrderModel[] = [];
    errorMessage: string;

    constructor(private dataAccessService: DataAccessService) {
    }

    ngOnInit() {
        this.dataAccessService.GetCurrentOrders()
            .subscribe(
            orders => {
                console.log(orders);
                this.orders = orders
            },
            error => this.errorMessage = error
            );

    }
}