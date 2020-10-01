import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { FillQuizComponent } from './components/fill-quiz/fill-quiz.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  {
      path: 'create',
      component: CreateQuizComponent,
  },
  {
      path: 'fill',
      component: FillQuizComponent,
  },
  {
      path: 'question',
      component: QuestionComponent,
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
