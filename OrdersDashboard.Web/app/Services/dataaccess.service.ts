import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ProductModel } from '../Models/ProductModel';
import { OrderModel } from '../Models/OrderModel';

@Injectable()
export class DataAccessService {
    private actionUrl: string;
    private headers: Headers;
    //TODO: break out to separate data services per type?
    constructor(private http: Http) {
        this.actionUrl = 'http://localhost:51435/api'; 
    }

    //public GetCartProducts = (cartId: string): Observable<ProductModel[]> => {
    //    return this.http.get(this.actionUrl + '/carts/' + cartId + '/products')
    //        .map((response: Response) => <ProductModel[]>response.json())
    //        .catch(this.handleError);
    //}

    public GetCurrentOrders = (): Observable<OrderModel[]> => {
        return this.http.get(this.actionUrl + '/orders')
            .map((response: Response) => <OrderModel[]>response.json())
            .catch(this.handleError);
    }


    public GetOrder = (orderNumber: string): Promise<OrderModel> => {
        return this.http.get(this.actionUrl + '/orders/' + orderNumber)
            .map((response) => {
                return <OrderModel>response.json()
            })
            .catch(this.handleError)
            .toPromise()
    }

    public FindProduct = (searchTerm: string): Observable<ProductModel[]> => {
        return this.http.get(this.actionUrl + '/products/find' + searchTerm)
            .map((response: Response) => <ProductModel[]>response.json())
            .catch(this.handleError);
    }

    //public GetOrder = (orderNumber: string): Observable<OrderModel> => {
    //    return this.http.get(this.actionUrl + '/orders/' + orderNumber)
    //        .map((response: Response) => <OrderModel>response.json())
    //        .catch(this.handleError);
    //}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
