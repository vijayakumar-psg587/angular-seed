import { Injectable } from '@angular/core';
import { CustomErrorModel } from '../models/custom-error.model';
import { ErrorType } from '../models/enums/error-type.enum';
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  createAndThrowError(error) {
    console.log('comoon service- error:', error);
    const customErrorModel = new CustomErrorModel();
    if (error.error instanceof ErrorEvent) {
      customErrorModel.status = '421';
      customErrorModel.message = error.error.message;
      customErrorModel.type = ErrorType.CLIENT_ERROR;
    } else {
      customErrorModel.status = ''+error.status;
      customErrorModel.message = error.error.message;
      customErrorModel.type = ErrorType.SERVER_ERROR;
    }
    console.log('common servuce - customerr:', customErrorModel);
    return throwError(customErrorModel);
  }
}
