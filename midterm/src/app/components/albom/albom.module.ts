import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AlbomsComponent } from './alboms/alboms.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../../custom-material.module';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AlbomRoutingModule } from './albom-routing.module';

@NgModule({
  declarations: [UserListComponent, AlbomsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    AlbomRoutingModule,
    CustomMaterialModule,
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
export class AlbomModule { }
