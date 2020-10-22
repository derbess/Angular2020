import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbomsComponent } from './alboms/alboms.component';

const routes: Routes = [
  {
    path: '',
    component: AlbomsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AlbomRoutingModule {}
