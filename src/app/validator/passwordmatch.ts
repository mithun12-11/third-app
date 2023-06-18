import { AbstractControl } from "@angular/forms";

export function PasswordMatch(Password:string, conf_password:string){
    return function (form: AbstractControl){
const passwordValue = form.get(Password)?.value
const confpasswordValue = form.get(conf_password)?.value

if (passwordValue===confpasswordValue) {
    return null;
} 
   return {passwordMismatchError: true}
}

}