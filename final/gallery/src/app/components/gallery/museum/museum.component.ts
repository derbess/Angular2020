import { Component, Input, OnInit } from '@angular/core';
import { Museum } from 'src/app/models/museum';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.scss']
})
export class MuseumComponent implements OnInit {

  @Input() museum: Museum;
  constructor() { }

  ngOnInit(): void {
    
  }

}
