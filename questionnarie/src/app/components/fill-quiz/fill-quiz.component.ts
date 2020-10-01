import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormArray,
  FormArrayName,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { QuestionComponent } from '../question/question.component';
import { Question } from './../../question';

@Component({
  selector: 'app-fill-quiz',
  templateUrl: './fill-quiz.component.html',
  styleUrls: ['./fill-quiz.component.scss'],
})
export class FillQuizComponent implements OnInit, OnDestroy {
  quiz: any;
  questionCount: number;
  questions: Question[];
  interval:any;

  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);

  form = new FormGroup({
    checkbox1: this.checkboxControl1,
    checkbox2: this.checkboxControl2,
    checkbox3: this.checkboxControl3,
    checkbox4: this.checkboxControl4,
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.quiz = JSON.parse(localStorage.getItem('dynamicForm'));
    this.questions = this.quiz.questions;
    this.questionCount = this.quiz.numberOfQuestion;
    for(let i =0;i<this.questionCount;i++)
    {
      this.questions[i].shouldShow = true;
    }

    this.interval = setInterval(() => {
      for(let i =0;i<this.questionCount;i++)
      {
        this.questions[i].time--;
        if(this.questions[i].time === 0) {
          this.questions[i].shouldShow = false;
        }
        console.log(this.questions[i].time)
      }
    }, 1000);
  }
  ngOnDestroy():void {
    if(this.interval){
      clearInterval(this.interval);
    }
  }
  onSubmit() {
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.form.value, null, 4)
    );
    // localStorage.setItem('responseForm', JSON.stringify(this.form.value));
  }
  
}
