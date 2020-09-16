import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoListComponent } from './components/photo/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo/photo-form/photo-form.component';
import { PhotoComponent } from './components/photo/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoListComponent,
    PhotoFormComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
