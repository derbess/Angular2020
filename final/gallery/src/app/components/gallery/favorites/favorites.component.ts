import { Component, OnInit } from '@angular/core';
import { Masterpiece } from 'src/app/models/masterpiece';
import { Favorite } from '../../../models/favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor() { }
  masterpieces: Masterpiece[] = [];
  ngOnInit(): void {
    const fav = JSON.parse(localStorage.getItem('favorite')) as Favorite;
    if (fav && fav.masterpieces && fav.masterpieces.length) {
      this.masterpieces = fav.masterpieces;
    } 
  }

}
