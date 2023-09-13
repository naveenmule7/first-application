import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        let value = control.value as string;

        if (value && value.indexOf(' ') >=0)
            return { spaceExists: true }
        else
            return null;
    };
} 