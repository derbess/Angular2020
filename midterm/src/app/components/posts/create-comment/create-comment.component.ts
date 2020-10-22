import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { Router } from '@angular/router';
import { Comment, Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.scss'],
})
export class CreateCommentComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {}
  form: FormGroup;
  @Input() post: Post;
  @Output() onCommentSubmit = new EventEmitter<Comment[]>([]);
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      body: ['', [Validators.required]],
    });
  }

  onSubmit(value) {
    const { name, body } = value;
    const postId = this.post.id;
    const { userId } = JSON.parse(localStorage.getItem('token'));
    this.apiService.getusers().subscribe((users) => {
      const me = users.find((user) => user.id === userId);
      this.apiService
        .createComment(this.post.id, { name, body, postId, email: me.email })
        .subscribe(() => {
          this.apiService.getComments(postId).subscribe(data => {
            this.onCommentSubmit.emit(data);
          });
        });
    });
  }
}
