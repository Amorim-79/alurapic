import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PhotosModule } from './photo/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { CardModule } from './shared/components/card/card.module';
import { DarkenOnHoverModule } from './shared/directives/darken-on-hover/darken-on-hover.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PhotosModule,
    ErrorsModule,
    CardModule,
    DarkenOnHoverModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
