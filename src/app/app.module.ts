import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ValidateComponent } from './validate/validate.component';
import { FormsModule } from '@angular/forms';
import { TodoListModule } from './todo-list/todo-list.module';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ValidateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, TodoListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
