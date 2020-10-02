import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotoModule } from '../photo/photo.module';

import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';

import { FilterByDescription } from './photos/filter-by-description.pipe';
import { SearchComponent } from './search/search.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { DarkenOnHoverModule } from '../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    declarations: [
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports: [
        PhotoModule,
        CardModule,
        CommonModule,
        DarkenOnHoverModule,
    ]
})
export class PhotoListModule {  }
