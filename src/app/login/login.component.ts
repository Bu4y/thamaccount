import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgProgressService } from 'ngx-progressbar';

import { LoginModel } from "./login.model";
import { LoginService } from "./login.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    login: LoginModel = new LoginModel();
    constructor(public router: Router, private loginService: LoginService, public progressService: NgProgressService) {
    }

    ngOnInit() {
    }

    onLoggedin(login) {
        this.loginService.login(login).then((data) => {
            console.log(data);
            this.router.navigate(['/account']);
            localStorage.setItem('isLoggedin', 'true');
            localStorage.setItem('userLoggedin', JSON.stringify(data));
        }, (error) => {
            if (JSON.parse(error._body).message) {
                alert(JSON.parse(error._body).message);
            } else {

            }
        })
    }

}
