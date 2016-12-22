import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { LoggerService } from '../Services/logger.service';

@Injectable()
export class BaseDataService {

    protected actionUrl: string;
    

    constructor(protected http: Http, protected loggerService: LoggerService) {
        this.actionUrl = 'http://localhost:51435/api/';
    }

}
