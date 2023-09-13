import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private router: Router, private authService: AuthService){
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.authService.token) {
            return true;
        }
        else {
            this.router.navigate(['/un-authorized']);
            return false;
        }
        
    }
}