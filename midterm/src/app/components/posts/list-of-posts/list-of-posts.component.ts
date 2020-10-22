import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/auth.models';
import { Post } from '../../../models/posts.model';
import { ApiService } from '../../../services/api.service';
@Component({
  selector: 'app-list-of-posts',
  templateUrl: './list-of-posts.component.html',
  styleUrls: ['./list-of-posts.component.scss'],
})
export class ListOfPostsComponent implements OnInit {
  list: Post[];
  filteredList: Post[];
  users: User[];
  form: FormGroup;

  constructor(private apiService: ApiService, private fromBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((data) => {
      this.list = data;
      this.filteredList = this.list;
      console.log(this.list);
    });

    this.apiService.getusers().subscribe((data) => {
      this.users = data;
    });

    this.form = this.fromBuilder.group({
      author: ['']
    });

    this.form.get('author').valueChanges.subscribe(() => {
      this.filterPost();
    });
  }

  filterPost() {
    const author = this.form.get('author').value;
    this.filteredList = this.list.filter(item => {
      const users =  this.users.filter(user => user.name.includes(author)).map(user => user.id);
      return users.includes(item.userId);
    });
  }

  findUser(userId: number) {
    return this.users.find((user) => user.id === userId);
  }

}
