import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ProductModel } from '../Models/ProductModel';

import { LoggerService } from '../Services/logger.service';
import { BaseDataService } from '../Services/base.data.service';

@Injectable()
export class ProductDataService extends BaseDataService {

    constructor(protected http: Http, protected loggerService: LoggerService) {
        super(http, loggerService);
        this.actionUrl = this.actionUrl + 'products';
    }

    public findProducts = (searchTerm: string): Observable<ProductModel[]> => {
        return this.http.get(this.actionUrl + '/find/' + searchTerm)
            .map((response: Response) => <ProductModel[]>response.json())
            .catch((error) => {
                this.loggerService.logError(error,'ProductDataService.findProducts');
                return Observable.throw(error);
            });
    }

    public getProduct = (productIdentifier: string): Promise<ProductModel> => {
        return this.http.get(this.actionUrl + '/' + productIdentifier)
            .map((response) => {
                return <ProductModel>response.json()
            })
            .catch((error) => {
                this.loggerService.logError(error,'ProductDataService.getProduct');
                return Observable.throw(error);
            })
            .toPromise();
    }


}
