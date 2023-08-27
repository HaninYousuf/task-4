import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //ngModel
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserSelectorComponent } from './user-selector/user-selector.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ResultComponent } from './result/result.component';


@NgModule({
  declarations: [
    AppComponent,
    UserSelectorComponent,
    QuestionFormComponent,
    ResultComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
