import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";
import {StaticService} from "../../shared/services/static.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService, private router: Router,
              private readonly staticService: StaticService) {
  }
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):   Promise<boolean | UrlTree>{
    try {
      console.log('entry - auth guard service');
      const jwtToken = await this.authService.getAccessToken();
      if(jwtToken) {
        const isExpired = await this.authService.getTokenDetails(jwtToken);
        console.log('Auth guard-isExpired in auth service:', isExpired);
        this.staticService.setLoggedIn(!isExpired);
        return isExpired;
      } else {
        console.log('Auth guard -No token can be generated:', )
        // TODO: throw error here
        return false;
      }
    } catch(err) {
      console.log('Auth guard - err in atu guard:', err);
      // TODO: throw err and capture it
      await this.router.navigate(['/login']);
      return false;
    }
  }

}
