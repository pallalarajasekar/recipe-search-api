import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GuardGuard implements CanActivate {
  constructor(private router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(window.localStorage.getItem("authtoken")){
        console.log(window.localStorage.getItem("authtoken"));
        return true;
      }else{
        console.log(window.localStorage.getItem("authtoken"));
        this.router.navigate(["/login"])
        return false;
      }

  }
  
}
