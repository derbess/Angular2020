import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainAuthPageComponent } from './components/auth/main-auth-page/main-auth-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: async () => {
      const authModule = await import('./components/auth/auth.module').then((m) => m.AuthModule);
      return authModule;
    },
  },
  {
    path: '',
      component: MainAuthPageComponent,
      children: [
        {
          path: 'posts',
          loadChildren: async () => {
            const postsModule = await import('./components/posts/posts.module').then((m) => m.PostsModule);
            return postsModule;
          }
        },
      ],
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
