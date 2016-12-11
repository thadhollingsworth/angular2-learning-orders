import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params  } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { OrderModel } from '../Models/OrderModel';
import { DataAccessService } from '../Services/dataaccess.service';

@Component({
    moduleId: module.id,
    templateUrl: 'order-detail.html'
})


export class OrderDetailComponent implements OnInit {
    order: OrderModel = new OrderModel();

    constructor(private dataAccessService: DataAccessService,
                private router: ActivatedRoute) {
    }

    ngOnInit() : void{
        this.router.params
            .switchMap((params: Params) => this.dataAccessService.getOrder(params['orderNumber']))
            .subscribe(order => {
                this.order = order;
            });
    }
}