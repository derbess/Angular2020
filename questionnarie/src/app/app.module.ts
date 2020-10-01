import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './custom-material/custom-material.module';
import { CreateQuizComponent } from './components/create-quiz/create-quiz.component';
import { FillQuizComponent } from './components/fill-quiz/fill-quiz.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuestionComponent } from './components/question/question.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    FillQuizComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
