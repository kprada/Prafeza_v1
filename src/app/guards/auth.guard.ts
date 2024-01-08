import { Injectable } from '@angular/core';
import {   ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree, } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private route: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (state.url.includes('/login')) {
        localStorage.clear();
        return true;
      } else if (
        localStorage.getItem('token') /* &&
        localStorage.getItem('usuario') &&
        localStorage.getItem('conexion') &&
        localStorage.getItem('refresh') */
      ) {
        return state.url == '/login' ? this.route.parseUrl('principal') : true;
      } else {
        return this.route.parseUrl('login');
      }
  }

}
