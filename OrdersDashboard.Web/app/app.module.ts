import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


//App Feature Modules
import { ProductModule } from './Product/product.module';
import { OrderModule } from './Order/order.module';
import { CartModule } from './Cart/cart.module';

//App Components
import { DashboardComponent } from './Dashboard/dashboard.component';

import { DataAccessService } from './Services/dataaccess.service';
import { LoggerService } from './Services/logger.service';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent }
    //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        ProductModule,
        OrderModule,
        CartModule
    ],
    exports: [RouterModule],
    declarations: [
        AppComponent,
        DashboardComponent
    ],
    providers: [
        LoggerService,
        DataAccessService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
