import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';

const MODULES = [
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule,
];


@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES ],
  exports: [ ...MODULES],
  providers: []
})
export class CustomMaterialModule { }
