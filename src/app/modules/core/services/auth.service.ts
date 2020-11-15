import { Injectable } from '@angular/core';
import {StaticService} from "../../shared/services/static.service";
import {Observable, throwError} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private staticService: StaticService) {}

  async getAccessToken(): Promise<string> {
    // TODO: get the token from a service and store that in locakstriage. For now harcode it
    const testModel = await this.staticService.getTestHeaderConfig();
    localStorage.setItem('access_token', testModel.sampleUserJwt);
    const userJwt: string = localStorage.getItem('access_token');
    console.log('user jwt token:', userJwt);
    return userJwt;
  }

  async getTokenDetails(tokenString): Promise<boolean> {

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(tokenString);
    const expirationDate = helper.getTokenExpirationDate(tokenString);
    const isExpired: boolean = helper.isTokenExpired(tokenString);
    console.log('decoded token:', decodedToken, 'expiration data:', expirationDate, ' isExpired:', isExpired);
    return isExpired;
  }

  // async verifyAuthorization(): Observable<boolean> {
  //   try {
  //     // TODO: generate/get JWT from an auth server. Now get it fron test.json file and store in localStorage
  //     const testModel = await this.staticService.getTestHeaderConfig();
  //     localStorage.setItem('id_token', testModel.sampleUserJwt);
  //
  //     // Now get it from localstorage and decode the token
  //     const userJwt: string = localStorage.getItem('id_token');
  //
  //
  //   } catch(err) {
  //     console.log('err caught un auth servuce:', err);
  //     // TODO: throw the error and catch in global error handler
  //     return throwError(new Error(err));
  //   }
  //
  //   // TODO: use angular jwt service to validate the token
  // }
}
