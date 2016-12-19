import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { OrderListComponent } from './order-list.component';
import { OrderDetailComponent } from './order-detail.component';

import { OrderDataService } from '../Services/order.data.service';

const productRoutes: Routes = [
    { path: 'orders', component: OrderListComponent },
    { path: 'order/:orderNumber', component: OrderDetailComponent }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        OrderListComponent,
        OrderDetailComponent
    ],
    exports: [RouterModule],
    providers: [OrderDataService]
})
export class OrderModule { }