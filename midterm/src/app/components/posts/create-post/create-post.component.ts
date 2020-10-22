import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}
  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  onSubmit(value) {
    const { title, body } = value;
    const token = JSON.parse(localStorage.getItem('token'));
    if (token && token.userId) {
      this.apiService
        .createPost({ title, body, userId: Number(token.userId) })
        .subscribe((data) => {
          this.router.navigate(['/posts'])
        });
    }
  }
}
