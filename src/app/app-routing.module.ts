import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { HomePageComponent } from 'src/app/home-page/home-page.component';

const routes: Routes = [
  { path: 'create', component: CreateComponent},
  { path: 'edit', component: EditComponent},
  { path: 'list', component: ListComponent},
  { path: ' ', redirectTo: '/list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
