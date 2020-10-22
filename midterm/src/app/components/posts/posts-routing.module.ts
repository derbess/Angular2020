import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { ListOfPostsComponent } from './list-of-posts/list-of-posts.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    component: ListOfPostsComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class PostsRoutingModule {}
