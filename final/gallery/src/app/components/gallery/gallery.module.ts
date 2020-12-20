import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryRoutingModule } from './gallery-routing.module';
import { MasterpieceComponent } from './masterpiece/masterpiece.component';
import { MasterpiecesComponent } from './masterpieces/masterpieces.component';
import { CustomMaterialModule } from 'src/app/custom-material.module';
import { MuseumComponent } from './museum/museum.component';
import { MuseumsComponent } from './museums/museums.component';
import { CreateMasterpieceComponent } from './create-masterpiece/create-masterpiece.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateMasterpieceComponent } from './update-masterpiece/update-masterpiece.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UpdateDeleteMssComponent } from './update-delete-mss/update-delete-mss.component';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    MasterpieceComponent,
    MasterpiecesComponent,
    MuseumComponent,
    MuseumsComponent,
    CreateMasterpieceComponent,
    UpdateMasterpieceComponent,
    GalleryComponent,
    UpdateDeleteMssComponent,
    FavoritesComponent,
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    GalleryRoutingModule,
    ReactiveFormsModule,
  ],
})
export class GalleryModule {}
