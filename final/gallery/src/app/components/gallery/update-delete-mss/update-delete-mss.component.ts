import { Component, OnInit } from '@angular/core';
import { Masterpiece } from 'src/app/models/masterpiece';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-update-delete-mss',
  templateUrl: './update-delete-mss.component.html',
  styleUrls: ['./update-delete-mss.component.scss']
})
export class UpdateDeleteMssComponent implements OnInit {

  constructor(private galleryService:ArtService) { }

  mp:Masterpiece[] = [];
  ngOnInit(): void {
    this.mp = this.galleryService.getMasterPieces();
  }

  upd() {
    this.mp = this.galleryService.getMasterPieces();
  }
}
