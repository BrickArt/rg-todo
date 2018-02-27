import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user.model';
import { UsersService } from '../../shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"]
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  hide = true;

  constructor(private usersService: UsersService,
              private authService: AuthService,
              private router: Router,
              public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [ Validators.required, Validators.minLength(6) ])
    });
  }

  getUsernameErrorMessage() {
    return this.form
      .get("username")
      .hasError("required") ? "You must enter a value." : "";
  }

  getPasswordErrorMessage(){
    return this.form
      .get("password")
      .hasError("required") ? "You must enter a value." :
    this.form
      .get("password")
      .hasError("minlength") ? `Password must be at least 6 characters long. Now is ${this.form.get("password").errors.minlength.actualLength}` :
    "";
  }

  onSubmit() {
    const formValue = this.form.value;

    this.usersService.getUserByUsername(formValue.username)
      .subscribe((user: User) => {
        if (user) {
          if (user.password === formValue.password) {
            window.localStorage.setItem('user', JSON.stringify(user));
            this.authService.login();
            this.openSnackBar('You are logged in!')
            this.router.navigate(['/system']);
          } else {
            this.openSnackBar('Password is not correct!')
          }
        } else {
          this.openSnackBar('User not found.')
        }
      });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000,
    });
  }
}
