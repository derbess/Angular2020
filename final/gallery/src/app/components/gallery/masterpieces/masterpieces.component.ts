import { Component, Input, OnInit } from '@angular/core';
import { Masterpiece } from 'src/app/models/masterpiece';
import { ArtService } from 'src/app/services/art.service';

@Component({
  selector: 'app-masterpieces',
  templateUrl: './masterpieces.component.html',
  styleUrls: ['./masterpieces.component.scss']
})
export class MasterpiecesComponent implements OnInit {

  constructor() { }

  @Input() mp: Masterpiece[] = [];
  ngOnInit(): void {
  }

}
