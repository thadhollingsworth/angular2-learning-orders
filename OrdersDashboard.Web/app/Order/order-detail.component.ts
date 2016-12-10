import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { OrderModel } from '../Models/OrderModel';
import { DataAccessService } from '../Services/dataaccess.service';

@Component({
    moduleId: module.id,
    providers: [DataAccessService],
    templateUrl: 'order-detail.html'
})


export class OrderDetailComponent implements OnInit {
    order: OrderModel = new OrderModel();
    errorMessage: string;

    constructor(private dataAccessService: DataAccessService,
                private router: ActivatedRoute) {
    }

    ngOnInit() : void{
        //let orderNumber = this.router.snapshot.params['orderNumber'];
        //this.dataAccessService.GetOrder(orderNumber)
        //    .subscribe(
        //        order => {
        //            console.log(order);
        //            this.order = order
        //    },
        //    error => this.errorMessage = error
        //    );

        this.router.params
            .switchMap((params: Params) => this.dataAccessService.GetOrder(params['orderNumber']))
            .subscribe(order => {
                this.order = order;
                console.log(this.order);
            });
    }
}