import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-toast',
  templateUrl: './create-toast.component.html',
  styleUrls: ['./create-toast.component.scss']
})
export class CreateToastComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  form: FormGroup;
  verticalAlignment = ['TOP', 'CENTER', 'BOTTOM'];
  horizontalAlignment = ['LEFT', 'CENTER', 'RIGHT'];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: [''],
      content: ['', [Validators.required]],
      type: ['', [Validators.required]],
      duration: [0, [Validators.required]],
      close: [true],
      verticalPosition: ['BOTTOM', [Validators.required]],
      horizontalPosition: ['RIGHT', [Validators.required]],
    });
  }

}
