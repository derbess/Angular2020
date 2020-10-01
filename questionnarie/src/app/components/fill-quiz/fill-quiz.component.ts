import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question} from './../../question';


@Component({
  selector: 'app-fill-quiz',
  templateUrl: './fill-quiz.component.html',
  styleUrls: ['./fill-quiz.component.scss']
})
export class FillQuizComponent implements OnInit {
  quiz: any;
  questionCount: number;
  questions: Question[];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.quiz = JSON.parse(localStorage.getItem("dynamicForm"));
    this.questions = this.quiz.questions;
    this.questionCount = this.quiz.numberOfQuestion;
  }

  
  
}
 