import { Component} from '@angular/core';

import { DataAccessService } from '../Services/dataaccess.service';
import { OrderModel } from '../Models/OrderModel';

@Component({
    moduleId: module.id,
    selector: 'dashboard',
    providers: [DataAccessService],
    templateUrl: 'dashboard.html'
})
export class DashboardComponent  {
    orders: OrderModel[] = [];
    errorMessage: string;

    constructor(private dataAccessService: DataAccessService) {
    }

    //ngOnInit() {
    //    this.dataAccessService.GetCurrentOrders()
    //        .subscribe(
    //        orders => {
    //            console.log(orders);
    //            this.orders = orders
    //        },
    //        error => this.errorMessage = error
    //        );

    //}
}