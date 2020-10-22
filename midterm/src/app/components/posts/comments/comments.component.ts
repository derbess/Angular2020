import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth.models';
import { Post, Comment } from '../../../models/posts.model';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  @Input() post: Post;
  comments: Comment[] = [];
  ngOnInit(): void {
    this.apiService.getComments(this.post.id).subscribe((data) => {
      this.comments = data;
    });
  }

  onCommentWritten(comments: Comment[]) {
    this.comments = comments;
  }
}
