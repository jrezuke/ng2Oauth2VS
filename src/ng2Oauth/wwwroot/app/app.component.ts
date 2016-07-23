import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { OAuthService } from './services/oAuth.service'

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>IFAR Extranet Application</h1>
               <button (click)="login()">Login</button>
               
               <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    hash:string;

    constructor(private _oAuth:OAuthService, private _router: Router) { }

    ngOnInit() {
        //this works
        if (window.location.hash) {
            this.hash = window.location.hash;
            this._oAuth.ServerCallback();
            if(this._oAuth.IsAuthorized)
                this._router.navigate(['/admin']);
            else {
                this._router.navigate(['/notAuthorized'])
            }
        }
    }

    login() {
        this._oAuth.Authorize();
    }
 }
