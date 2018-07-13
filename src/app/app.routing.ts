import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {ContactComponent} from './contact/contact.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const appRoutes: Routes = [
    { path: 'contact', component: ContactComponent},
    { path: 'landing', component: LandingPageComponent}
];

export const routing = RouterModule.forRoot(appRoutes);