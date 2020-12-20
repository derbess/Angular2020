import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Masterpiece } from 'src/app/models/masterpiece';
import { Museum } from 'src/app/models/museum';
import { ArtService } from './../../../services/art.service';

@Component({
  selector: 'app-museums',
  templateUrl: './museums.component.html',
  styleUrls: ['./museums.component.scss']
})
export class MuseumsComponent implements OnInit {

  constructor(private museumsService: ArtService) { }

  museums:Museum[] = [];
  ms: Masterpiece[] = [];
  @Output() selectMuseum = new EventEmitter<number>();
  ngOnInit(): void {
    this.museums = this.museumsService.getMuseums();
  }

  museumClick(museumId: number){
    this.selectMuseum.emit(museumId);
  }

}
