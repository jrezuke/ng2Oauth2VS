import { Injectable } from '@angular/core';

@Injectable()
export class AppConfig {
    public authorizationUrl: string = 'https://localhost:44345/connect/authorize';
    public client_id: string = 'ifar.extranet2';
    public redirect_uri: string = 'http://localhost:21308';
    public response_type: string = "id_token token";
    public scope: string = "openid";
    public nonce: string = "N" + Math.random() + "" + Date.now();
    public state = Date.now() + "" + Math.random();
}