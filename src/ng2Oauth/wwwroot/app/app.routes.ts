import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotAuthorizedComponent } from './notAuthorized/notAuthorized.component';
import { AuthenticateGuard } from './admin/authenticate.guard';

const routes: RouterConfig = [
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent, canActivate : [AuthenticateGuard]},
    { path: 'notAuthorized' , component: NotAuthorizedComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];