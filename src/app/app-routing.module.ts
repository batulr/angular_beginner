import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ValidateComponent } from './validate/validate.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'validate',
    component: ValidateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
