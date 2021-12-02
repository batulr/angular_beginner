import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRoutingModule } from './todo-list-routing.module';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, TodoListRoutingModule, FormsModule],
})
export class TodoListModule {}
