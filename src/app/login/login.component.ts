import { Component } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { AuthService } from "../services/auth.service";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    // navType: string = 'INTERNAL VALUE';
    
    
    
    loginModel = new LoginModel();
    constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {

    }

    login() {
        let response = this.authService.authenticate(this.loginModel.emailAddress, this.loginModel.password);
        if (response.status === 200){
                this.toastr.success(response.statusText);
                localStorage.setItem('name', response.body?.name!);
                localStorage.setItem('role', response.body?.role!);
                localStorage.setItem('token', response.body?.token!);
                

                

                this.router.navigate(['/home'])
        }
        else {
            this.toastr.error(response.statusText);
        }
        
    }

    //  loginForm = new FormGroup({
    //      username: new FormControl(null, [Validators.required,Validators.minLength(5)]),
    //      passwords: new FormControl(null, [Validators.required,Validators.minLength(5)])
    //  })

    //  get Uname() {
    //  return this.loginForm.get('username');
    //  }
    //  get Passwords() {
    //      return this.loginForm.get('passwords');
    //  }

    
}