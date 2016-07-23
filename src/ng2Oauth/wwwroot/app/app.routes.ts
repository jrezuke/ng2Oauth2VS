import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { NotAuthorizedComponent } from './notAuthorized/notAuthorized.component'
const routes: RouterConfig = [
    { path: '', redirectTo: 'home', terminal: true },
    { path: 'home', component: HomeComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'notAuthorized' , component: NotAuthorizedComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];