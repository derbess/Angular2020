import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/auth.models';
import { Post } from 'src/app/models/posts.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input() post: Post;
  @Input() user: User;
  ngOnInit(): void {
  }

}
