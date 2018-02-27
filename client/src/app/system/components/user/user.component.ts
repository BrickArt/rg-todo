import { Component, OnInit } from '@angular/core';
import { User } from '../../../shared/models/user.model';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

    user: User

    constructor(private authService: AuthService,
                private router: Router) { }

    ngOnInit() {

        this.user = JSON.parse(window.localStorage.getItem('user'))
    }

    onExit() {
        this.authService.logout();
        this.router.navigate(['login'])
    }

}
