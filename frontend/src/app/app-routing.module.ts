import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhotoFormComponent } from './photo/photo-form/photo-form.component';
import { PhotoListComponent } from './photo/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { PhotoListResolver } from './photo/photo-list/photo-list.resolver';

const routes: Routes = [
  { path: '', component: NotFoundComponent },
  { path: 'photos/add', component: PhotoFormComponent },
  { path: 'user/:userName', component: PhotoListComponent, resolve: { photos: PhotoListResolver } },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
