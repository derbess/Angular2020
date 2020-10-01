import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.scss'],
})
export class CreateQuizComponent implements OnInit {
  dynamicForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.dynamicForm = this.formBuilder.group({
      numberOfQuestion: ['', Validators.required],
      questions: new FormArray([]),
    });
  }

  get f() {
    return this.dynamicForm.controls;
  }
  get t() {
    return this.dynamicForm.controls.questions as FormArray;
  }
  // get v() {
  //   return this.t.variants as FormArray;
  // }
  checkboxControl1 = new FormControl(false);
  checkboxControl2 = new FormControl(false);
  checkboxControl3 = new FormControl(false);
  checkboxControl4 = new FormControl(false);

  onChangeQuestions(e) {
    const numberOfQuestion = e.target.value || 0;
    if (this.t.length < numberOfQuestion) {
      for (let i = this.t.length; i < numberOfQuestion; i++) {
        this.t.push(
          this.formBuilder.group({
            title: ['', Validators.required],
            variant1: ['', Validators.required],
            iswrite1: this.checkboxControl1,
            variant2: ['', Validators.required],
            iswrite2: this.checkboxControl2,
            variant3: ['', Validators.required],
            iswrite3: this.checkboxControl3,
            variant4: ['', Validators.required],
            iswrite4: this.checkboxControl4,
          })
        );
      }
    } else {
      for (let i = this.t.length; i >= numberOfQuestion; i--) {
        this.t.removeAt(i);
      }
    }
  }
  // onChangeVariants(e) {
  //   const numberOfVariants = e.target.value || 0;
  //   if (this.t.length < numberOfVariants) {
  //     for (let i = this.t.length; i < numberOfVariants; i++) {
  //       this.t.variants.push(
  //         this.formBuilder.group({
  //           title: ['', Validators.required],
  //           variants: ['', Validators.required],
  //         })
  //       );
  //     }
  //   } else {
  //     for (let i = this.t.length; i >= numberOfVariants; i--) {
  //       this.t.removeAt(i);
  //     }
  //   }
  // }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      return;
    }
    console.log(this.dynamicForm.value)
    // display form values on success
    alert(
      'SUCCESS!! :-)\n\n' + JSON.stringify(this.dynamicForm.value, null, 4)
    );
    localStorage.setItem('dynamicForm',  JSON.stringify(this.dynamicForm.value));
  }
  onReset() {
    // reset whole form back to initial state
    this.submitted = false;
    this.dynamicForm.reset();
    this.t.clear();
  }
  onClear() {
    // clear errors and reset ticket fields
    this.submitted = false;
    this.t.reset();
  }
}
