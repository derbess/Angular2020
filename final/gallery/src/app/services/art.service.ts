import { Injectable } from '@angular/core';
import { Masterpiece } from '../models/masterpiece';
import { Museum } from '../models/museum';

@Injectable({
  providedIn: 'root'
})
export class ArtService {

  constructor() { }

  getMuseums() {
    const museums = JSON.parse(localStorage.getItem('museums')) as Museum[];
    return museums;
  }
  getMasterPieces() {
    const mp = JSON.parse(localStorage.getItem('masterpieces')) as Masterpiece[];
    return mp;
  }
  createMasterPiece(data: Masterpiece) {
    const mp = JSON.parse(localStorage.getItem('masterpieces')) as Masterpiece[];

    data.id = mp.length + 1;
    mp.push(data);
    console.log(mp);
    localStorage.setItem('masterpieces', JSON.stringify(mp));
  }

  getMasterPiecesByType(type) {
    const mp = JSON.parse(localStorage.getItem('masterpieces')) as Masterpiece[];
    return mp.filter((item) => item.type === type);
  }

}
