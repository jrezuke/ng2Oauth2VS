import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { OAuthService } from './services/oAuth.service';
import { ApiService } from './services/api.service';

@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ApiService],
    template: `<h1>IFAR Extranet Application</h1>

                <button *ngIf!="_oAuth.IsAuthorized" (click)="login()">Login</button>
                <button *ngIf="_oAuth.IsAuthorized" (click)="logout()">Logout</button>
                <button *ngIf="_oAuth.IsAuthorized" (click)="getApi()">Get Api</button>
                {{values}}
               <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {
    hash:string;
    public values: string[];
    errorMessage: string;

    constructor(private _oAuth:OAuthService, private _router: Router, private _api:ApiService) { }

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

    logout() {
        this._oAuth.Logoff();
    }

    getApi() {
        console.log("getApi started");

        this._api.getApi()
            .subscribe(
            data => { this.values = data},
            error => this.errorMessage = error);
    }
 }
