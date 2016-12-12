import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';


import { OrderListComponent } from './order-list.component';
import { OrderDetailComponent } from './order-detail.component';

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
    exports: [RouterModule]
    //providers: [ProductDataService] //TODO: when break down data service to feature level bring in specific data serice heare.
})
export class OrderModule { }