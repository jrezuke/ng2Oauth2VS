import { Injectable } from '@angular/core';
import { Jsonp, Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
//import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { OAuthService } from './oAuth.service';
import { AppConfig } from '../app.config';
import { Claim } from '../admin/claim.class'

@Injectable()
export class ApiService {
    private apiUrl: string;
    private headers: Headers;
    private requestOpts: RequestOptions;

    constructor(private _jsonp: Jsonp, private http: Http, private _oAuth: OAuthService, private _appConfig: AppConfig) {
        this.apiUrl = this._appConfig.apiTodoUrl;
    }


    getApi() {
        this.headers = new Headers();
        var token = this._oAuth.GetToken();
        //this.headers.append('Content-Type', 'application/json');
        //this.headers.append('Accept', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + token);
        //this.headers.append('Access-Control-Allow-Origin', '*');
        this.requestOpts = new RequestOptions();
        this.requestOpts.headers = this.headers;

        // return this._jsonp.request(this.apiUrl, this.requestOpts)
        //     .map(res => res.json());
             //.subscribe(resp => console.log("response:", resp.json() ));
        return this.http.get(this.apiUrl, this.requestOpts)
           .map(res => res.json());
    }

}