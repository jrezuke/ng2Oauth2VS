import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    public authorizationUrl: string = 'http://localhost:5000/connect/authorize';
    public authorizationEndSessionUrl: string = 'http://localhost:5000/connect/endsession';
    public client_id: string = 'ifar.extranet';
    public redirect_uri: string = 'http://localhost:8010';
    public redirectPostLogout_uri = 'http://localhost:8010;'
    public response_type: string = "id_token token";
    public scope: string = "openid profile api1";
    public nonce: string = "N" + Math.random() + "" + Date.now();
    public state = Date.now() + "" + Math.random();
    public apiTodoUrl: string = 'http://localhost:1773/claims'
}