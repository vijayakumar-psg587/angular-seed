import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { APP_CONST } from '../constants/app.constants';
import { plainToClass } from 'class-transformer';
import { TestDataModel } from '../models/test-data.model';
import {CommonService} from "./common.service";

@Injectable({
  providedIn: 'root',
})
export class StaticService {
  private testModel: TestDataModel;
  private isLoggedIn: boolean = false;


  constructor(private httpClient: HttpClient, private commonService: CommonService) {
    this.testModel = new TestDataModel();
  }

  public showAccountFlag(): boolean {
    // only if logged in, return true - else false
    return this.isLoggedIn;
  }

  public setLoggedIn(loginFlag: boolean) {
    console.log('Static service - liginflag:', loginFlag);
    this.isLoggedIn = loginFlag;
  }

  public async getTestHeaderConfig(): Promise<TestDataModel> {
    console.log(this.testModel);
    if (!this.testModel.headerTitle) {
      console.log('inside header config service');
      try {
        const res = await this.httpClient.get(APP_CONST.CONFIG_FILE_PATH.TEST).toPromise();
        this.testModel = plainToClass(TestDataModel, res, { excludeExtraneousValues: true });
      } catch (err) {
        console.log('err accessing the test.json file:', err);
        this.testModel = null;
        this.commonService.createAndThrowError(err);
      }
    }
    return this.testModel;
  }
}
