import { Injectable } from '@angular/core';


@Injectable()
export class LoggerService {

    //TODO: bring in something like toaster?
    logError(errorObject: any, message: string = null): void {
        if (message != null) {
            message = 'Error: ' + message;
        } else {
            message = 'Error';
        }
        console.log(message, errorObject);
    }

    //TODO: pass in configuration and if debug then info/warn are written
    logInfo(errorObject: any, message: string = null): void {
        if (message != null) {
            message = 'Info: ' + message;
        } else {
            message = 'Info';
        }
        console.log(message, errorObject);
    }

    logWarning(errorObject: any, message: string = null): void {
        if (message != null) {
            message = 'Warn: ' + message;
        } else {
            message = 'Warn';
        }
        console.log(message, errorObject);
    }

}
