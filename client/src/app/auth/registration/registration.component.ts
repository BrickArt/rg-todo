import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../../shared/services/users.service';
import { User } from '../../shared/models/user.model';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

    form: FormGroup;
    hide = true;

    constructor(private usersService: UsersService,
                public snackBar: MatSnackBar,
                private router: Router) { }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl(null, [Validators.required], [this.forbiddenUsernames.bind(this)]),
            password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
            password2: new FormControl(null, [Validators.required, Validators.minLength(6)], [this.unconfirmPasswordErrorMessage.bind(this)])
        });
    }

    getUsernameErrorMessage() {
        return this.form
            .get("username")
            .hasError("required") ? "You must enter a value." :
            this.form
                .get("username")
                .hasError("forbiddenUsername") ? "This username already taken." : ""
    }

    getPasswordErrorMessage() {
        return this.form
            .get("password")
            .hasError("required") ? "You must enter a value." :
            this.form
                .get("password")
                .hasError("minlength") ? `Password must be at least 6 characters long. Now is ${this.form.get("password").errors.minlength.actualLength}` :
                "";
    }

    getConfirmPasswormErrorMessage() {
        return this.form
            .get("password2")
            .hasError("required") ? "You must enter a value." :
            this.form
                .get("password2")
                .hasError("minlength") ? `Password must be at least 6 characters long. Now is ${this.form.get("password2").errors.minlength.actualLength}` :
                this.form
                    .get("password2")
                    .hasError("unconfirmPassword") ? "Passwords do not match." :
                    "";
    }

    forbiddenUsernames(control: FormControl): Promise<any> {
        return new Promise((resolve, reject) => {
            this.usersService.getUserByUsername(control.value)
                .subscribe((user: User) => {
                    console.log(user)
                    if (user) {
                        resolve({ forbiddenUsername: true });
                    } else {
                        resolve(null)
                    }
                })
        })
    }

    unconfirmPasswordErrorMessage(control: FormControl): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log(control.value)
            if (control.value !== this.form.value['password']) {
                resolve({ unconfirmPassword: true })
            } else {
                resolve(null)
            }
        })
    }

    onSubmit() {
        const formValue = this.form.value;

        this.usersService.createNewUser({ username: formValue.username, password: formValue.password})
            .subscribe((user: User) => {
                if (user) {
                    this.openSnackBar('User is created! Login now!')
                    this.router.navigate(['/login']);
                } else {
                    this.openSnackBar('Server error!')
                }
            });
    }

    openSnackBar(message: string) {
        this.snackBar.open(message, 'close', {
            duration: 2000,
        });
    }

}
