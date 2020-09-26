import { Pipe, PipeTransform } from '@angular/core';
import { PhotoDataModel } from '../../photo-data.model';

@Pipe({ name: 'filterByDescription' })
export class FilterByDescription implements PipeTransform {

  transform(photos: PhotoDataModel[], descriptionQuery: string): any {
    descriptionQuery = descriptionQuery.trim().toLowerCase();

    if (descriptionQuery) {
      return photos.filter(photo => photo.description.toLowerCase().includes(descriptionQuery));
    } else {
      return photos;
    }
  }
}
