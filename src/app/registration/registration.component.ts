import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { CoursesServices } from "../services/courses.service";
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";

@Component({
    selector: 'registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})


export class RegistrationComponent {
    // title: string='BrancheS';
    // getTitle(){
    //     return this.title;
    // }
    // courses: string[]= [];
    

    // constructor (coursesService: CoursesServices) {
    //     this.courses= coursesService.listCourses();
    // }
    isSubmitted: boolean = false;
    submitForm(form: NgForm){

        this.isSubmitted = true;
        
        if (form.invalid) {
            return false;
        }else {
            console.log(form.value);
            return true;
        }
    }

    registrationForm = new FormGroup({
        username: new FormControl(null, [Validators.required]),
        lock: new FormControl(null, [Validators.required]),
        forgotpassword: new FormControl(null,[Validators.required])
    })
    get uName() {
        return this.registrationForm.get('username');
    }
    get loCk() {
        return this.registrationForm.get('lock');
    }
    get forgotPassword() {
        return this.registrationForm.get('forgotpassword');
    }

}