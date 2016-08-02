import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { OAuthService } from '../services/oAuth.service';

@Injectable()
export class AuthenticateGuard implements CanActivate {
  constructor(private oAuth: OAuthService, private router: Router) {}

  canActivate() {

      if (this.oAuth.IsAuthorized) {
          return true;
      }

      this.router.navigate(['/home'])
  }
}