import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
    constructor(private router: Router) {

    }
    goBack() {
        this.router.navigate(['/home']);
    }
}