import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CustomMaterialModule } from '../../custom-material.module';
import { PostsRoutingModule } from './posts-routing.module';
import { AuthInterceptor } from '../../interceptors/auth.interceptor';
import { ApiService } from '../../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { ListOfPostsComponent } from './list-of-posts/list-of-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { CommentsComponent } from './comments/comments.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';

@NgModule({
  declarations: [PostComponent, ListOfPostsComponent, CreatePostComponent, CommentsComponent, CreateCommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PostsRoutingModule,
    CustomMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class PostsModule {}
