import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { CartLandingComponent } from './cart-landing.component';
import { CartComponent } from './cart.component';

const productRoutes: Routes = [
    { path: 'cart', component: CartLandingComponent }
];


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(productRoutes)
    ],
    declarations: [
        CartComponent,
        CartLandingComponent
    ],
    exports: [RouterModule]
    //providers: [ProductDataService] //TODO: when break down data service to feature level bring in specific data serice heare.
})
export class CartModule { }