// ts file calls component
import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { RegisterService } from "./lpnames.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "../custom.validators";

@Component({
    selector: 'register',
    templateUrl:'./register.component.html',
    styleUrls:['./register.component.css'],
})

export class RegisterComponent {
    // string interpolation-1
    // title: string = 'laptop names';
    // derectives-1,2 (it will modify the dom)
    // lpnames: string[] = [];

    //  constructor() {
    //     let objLPnames = new RegisterService();
    //     this.lpnames = objLPnames.listlpnames();
      

    //  constructor(LPnames: RegisterService ) {
    //      this.lpnames = LPnames.listlpnames();
    //  }
    registerForm = new FormGroup({
        firstname: new FormControl(null, [Validators.required,Validators.minLength(5)]),
        lastname: new FormControl(null, Validators.required),
        fullname: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required,CustomValidators.cannotContainSpace]),
        phonenumber: new FormControl(null, Validators.required),
    })

    get fName() {
        return this.registerForm.get('firstname');
    }
    get gmail() {
        return this.registerForm.get('email');
    }

    
}