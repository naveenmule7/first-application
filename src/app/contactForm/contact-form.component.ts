import { Component } from "@angular/core"

@Component({
    selector:'contact-form',
    templateUrl: './contact-form.component.html'
})

export class ContactFormComponent{
    getLog(formControl: any){
        console.log(formControl);
    }
}