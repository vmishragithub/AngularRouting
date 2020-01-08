import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { AuthService } from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild{
    constructor(private authService : AuthService){}
    
    canActivate(route:ActivatedRouteSnapshot , state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
         return this.authService.isAuthenticated().then(
             (authenticated : boolean) => {
                 if(authenticated){
                     return true;
                 }else{
                     return false;
                 }
             }
         );
        
    }

    canActivateChild(route:ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean{
        return this.canActivate(route,state);
    }

}