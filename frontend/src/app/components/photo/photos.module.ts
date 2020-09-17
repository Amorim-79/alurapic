import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotoFormComponent,
    PhotoListComponent,
  ],
  exports: [
    PhotoComponent,
    PhotoFormComponent,
    PhotoListComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class PhotosModule { }
