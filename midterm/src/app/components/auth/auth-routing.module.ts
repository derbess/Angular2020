import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainAuthPageComponent } from './main-auth-page/main-auth-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: MainAuthPageComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'signup',
        component: SignupComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AuthRoutingModule {}
