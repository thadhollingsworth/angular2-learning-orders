import { Component, Input } from '@angular/core';

import { OrderModel } from '../Models/OrderModel';

@Component({
    moduleId: module.id,
    selector: 'order-detail',
    templateUrl: 'order-detail.html'
})


export class OrderDetailComponent {
    @Input()
    order: OrderModel = new OrderModel();

}