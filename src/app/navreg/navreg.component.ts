import { Component } from "@angular/core";
import { NavModel } from "../navregmodel/navreg.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: 'navreg',
    templateUrl: './navreg.component.html',
    styles: ['.style1 {color : blue}','.style2 {color : yellow}']
})

export class NavregComponent {
    navType: string = 'INTERNAL VALUE';
    navModel = new NavModel();

    navreg() {
        console.log(`Email Address : ${this.navModel.emailAddress}`);
        console.log(`Password : ${this.navModel.password}`);

        
        
        
    }
nagreg() {
    console.log(`FName: ${this.navModel.fname}`);
    console.log(`MName: ${this.navModel.mname}`);
    console.log(`LName: ${this.navModel.lname}`);
    console.log(`Phone: ${this.navModel.phone}`);
    console.log(`Gmail:${this.navModel.gmail}`);
    console.log(`Passcode:${this.navModel.passcode}`);
}
candidatereg() {
    console.log(`CANDIDATE NAME ${this.navModel.candidatename}`);
    console.log(`MOTHER NAME ${this.navModel.mothername}`);
    console.log(`FATHER NAME ${this.navModel.fathername}`);
    console.log(`RESIDENTIAL ADDRESS ${this.navModel.residentialaddress}`);
}

navregForm = new FormGroup({
    company: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    model: new FormControl(null,[Validators.required,Validators.minLength(5)]),
    referenceid: new FormControl(null,[Validators.required,Validators.minLength(5)])
})

get comName() {
    return this.navregForm.get('company');
}
get modelName() {
    return this.navregForm.get('model');
}
get referenceID() {
    return this.navregForm.get('referenceid');
}
}