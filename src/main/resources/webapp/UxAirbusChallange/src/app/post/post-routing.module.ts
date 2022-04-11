import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByCategoryComponent } from './by-category/by-category.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/index', component: IndexComponent },
  { path: 'post/view', component: ViewComponent },
  { path: 'post/create', component: CreateComponent },
  { path: 'post/edit', component: EditComponent },
  { path: 'post/:byCategory', component: ByCategoryComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
