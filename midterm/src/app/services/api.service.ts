import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post, Comment } from '../models/posts.model';
import { User } from '../models/auth.models';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  BASE_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>(`${this.BASE_URL}/posts/`);
  }

  createPost(post) {
    return this.http.post(`${this.BASE_URL}/posts/`, post);
  }

  getusers() {
    return this.http.get<User[]>(`${this.BASE_URL}/users/`);
  }

  logout() {
    return this.http.post(`${this.BASE_URL}/sign-out/`, {});
  }

  getComments(postId: number) {
    return this.http.get<Comment[]>(
      `${this.BASE_URL}/posts/${postId}/comments`
    );
  }

  createComment(postId: number, comment) {
    return this.http.post(`${this.BASE_URL}/posts/${postId}/comments`, comment);
  }
}
