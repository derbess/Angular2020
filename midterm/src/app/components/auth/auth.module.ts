import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMaterialModule } from '../../custom-material.module';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import { ApiService } from './../../services/api.service';
import { MainAuthPageComponent } from './main-auth-page/main-auth-page.component';
import { AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [LoginComponent, SignupComponent, LogoutComponent, MainAuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class AuthModule {}
