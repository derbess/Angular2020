import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Output() onKeyPress = new EventEmitter<string>();
  pressKey(key: string) {
    this.onKeyPress.emit(key);
 }
  constructor() { }

  ngOnInit(): void {
  }

}
