import { bootstrap }    from '@angular/platform-browser-dynamic';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { AppConfig } from './app.config';
import { OAuthService } from './services/oAuth.service';

bootstrap(AppComponent, [
    APP_ROUTER_PROVIDERS,
    AppConfig,
    OAuthService
])
.catch(err => console.error(err));
