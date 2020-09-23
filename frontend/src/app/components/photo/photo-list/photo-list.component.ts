import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { PhotoDataModel } from '../photo-data.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit, OnDestroy {

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  photos: PhotoDataModel[];

  filter = '';
  userName = '';
  currentPage = 1;
  debounce: Subject<string> = new Subject<string>();
  hasMore = true;

  ngOnInit(): void {
    this.userName = this.route.snapshot.params.userName;
    this.photos = this.route.snapshot.data.photos;
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  load(): void {
    this.photoService.photosFromUserPaginated(
      this.userName,
      ++this.currentPage
    ).subscribe(photos => {
      this.photos = this.photos.concat(photos);
      if (!photos.length) { this.hasMore = false; }
    });
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
