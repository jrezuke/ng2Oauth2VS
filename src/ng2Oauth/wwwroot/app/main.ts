import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { OAuthService } from './services/oAuth.service';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { AuthenticateGuard } from './admin/authenticate.guard';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    AppConfig,
    OAuthService,
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    AuthenticateGuard
])
.catch(err => console.error(err));
