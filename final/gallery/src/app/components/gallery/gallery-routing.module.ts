import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMasterpieceComponent } from './create-masterpiece/create-masterpiece.component';
// import { GalleryModule } from './gallery.module';
import { GalleryComponent } from './gallery/gallery.component';
import { MasterpiecesComponent } from './masterpieces/masterpieces.component';
import { MuseumsComponent } from './museums/museums.component';
import { UpdateDeleteMssComponent } from './update-delete-mss/update-delete-mss.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    component: GalleryComponent,
  },
  {
    path: 'edit',
    component: UpdateDeleteMssComponent,
  },
  {
    path: 'create-museum',
    component: CreateMasterpieceComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalleryRoutingModule {}
