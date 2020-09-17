import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoComponent } from './components/photo/photo/photo.component';
import { PhotoFormComponent } from './components/photo/photo-form/photo-form.component';
import { PhotoListComponent } from './components/photo/photo-list/photo-list.component';
import { NotFoundComponent } from './components/errors/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: PhotoComponent },
  { path: 'photos/add', component: PhotoFormComponent },
  { path: 'user/:userName', component: PhotoListComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
