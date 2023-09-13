import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    selector: 'un-authorized',
    templateUrl: './un-authorized.component.html'
})
export class UnAuthorizedComponent {
    constructor(private router: Router, private authService: AuthService) {
    }
    goBack() {
        this.router.navigate(['/login'])
    }
}