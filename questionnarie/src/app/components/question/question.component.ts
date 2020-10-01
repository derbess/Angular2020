import { Component, Input, OnInit } from '@angular/core';
import { Question} from './../../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
// const q: <Question> {
//   title: "Question?",
//   variants: ["Variant1","Variant2","Variant3"],
//   answers: []
// }):;

export class QuestionComponent implements OnInit {


  // @Input() question:Question = {
  //     title: "Question?",
  //     variants:  ["Variant1","Variant2","Variant3"],
  //     answers: []
  //  }

  // title = "Question";
  

  constructor() { }

  ngOnInit(): void {
  }

}
