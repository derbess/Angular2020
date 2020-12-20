import { Component, OnInit } from '@angular/core';
import { Masterpiece } from 'src/app/models/masterpiece';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: ArtService) { }

  mp:Masterpiece[] = [];
  ngOnInit(): void {
    this.mp = this.galleryService.getMasterPieces();
  }
  chooseMuseum(museumId: number){
    if (museumId === 0) {
      this.mp = this.galleryService.getMasterPieces();
    } else {
      this.mp = this.galleryService.getMasterPieces().filter(mp => mp.museumId === museumId);
    }
  }
  typeClick(type: string){
    console.log(type);
    
      this.mp = this.galleryService.getMasterPiecesByType(type);
  }

}
