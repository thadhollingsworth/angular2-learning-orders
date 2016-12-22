import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { OrderModel } from '../Models/OrderModel';

import { LoggerService } from '../Services/logger.service';
import { BaseDataService } from '../Services/base.data.service';

@Injectable()
export class OrderDataService extends BaseDataService {

    constructor(protected http: Http, protected loggerService: LoggerService) {
        super(http, loggerService);
        this.actionUrl = this.actionUrl + 'orders';
    }

    public getCurrentOrders = (): Observable<OrderModel[]> => {
        return this.http.get(this.actionUrl)
            .map((response: Response) => <OrderModel[]>response.json())
            .catch((error) => {
                this.loggerService.logError(error);
                return Observable.throw(error);
            });
    }

    public getOrder = (orderNumber: string): Promise<OrderModel> => {
        return this.http.get(this.actionUrl + '/' + orderNumber)
            .map((response) => {
                return <OrderModel>response.json()
            })
            .catch((error) => {
                this.loggerService.logError(error);
                return Observable.throw(error);
            })
            .toPromise();
    }

}
