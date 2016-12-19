import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { OrderModel } from '../Models/OrderModel';

import { LoggerService } from '../Services/logger.service';

@Injectable()
export class OrderDataService {
    private actionUrl: string;

    constructor(private http: Http, private loggerService: LoggerService) {
        this.actionUrl = 'http://localhost:51435/api/orders';
    }

    public getCurrentOrders = (): Observable<OrderModel[]> => {
        return this.http.get(this.actionUrl)
            .map((response: Response) => <OrderModel[]>response.json())
            .catch(this.handleError);
    }

    public getOrder = (orderNumber: string): Promise<OrderModel> => {
        return this.http.get(this.actionUrl + '/' + orderNumber)
            .map((response) => {
                return <OrderModel>response.json()
            })
            .catch(this.handleError)
            .toPromise()
    }

    private handleError(error: Response) {
        this.loggerService.logError(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
