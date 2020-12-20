import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';
import { Masterpiece } from '../../../models/masterpiece';

@Component({
  selector: 'app-masterpiece',
  templateUrl: './masterpiece.component.html',
  styleUrls: ['./masterpiece.component.scss'],
})
export class MasterpieceComponent implements OnInit {
  @Input() mp: Masterpiece;
  isFav: boolean = false;
  isSignedIn: boolean = false;
  constructor() {}

  ngOnInit() {
    const me = JSON.parse(localStorage.getItem('me')) as User | null;
    if (me) {
      this.isSignedIn = true;
    } else {
      this.isSignedIn = false;
    }

    const fav = JSON.parse(localStorage.getItem('favorite')) as Favorite;
    if(fav){
      const exist = fav.masterpieces.find((item) => item.id === this.mp.id);
      this.isFav = exist ? true : false;
    }

    console.log(this.mp);
  }

  addToFavorite() {
    const fav = JSON.parse(localStorage.getItem('favorite')) as Favorite;
    const exist = fav.masterpieces.find((item) => item.id === this.mp.id);
    if (!exist) {
      fav.masterpieces.push(this.mp);
      this.isFav = true;
    } else {
      const rem = fav.masterpieces.filter(
        (item) => item.id !== exist.id
      );
      fav.masterpieces = rem;
      this.isFav = false;
    }
    localStorage.setItem('favorite', JSON.stringify(fav));

  }
}
