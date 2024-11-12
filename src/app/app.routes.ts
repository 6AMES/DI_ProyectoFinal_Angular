import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HombreComponent } from './hombre/hombre.component';
import { MujerComponent } from './mujer/mujer.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'hombre', component: HombreComponent },
    { path: 'mujer', component: MujerComponent },
    { path: 'login', component: LoginComponent },
    { path: 'createAccount', component: CreateAccountComponent }
];
