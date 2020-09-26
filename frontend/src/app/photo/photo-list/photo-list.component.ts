import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PhotoDataModel } from '../photo-data.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService, private route: ActivatedRoute) { }

  photos: PhotoDataModel[] = [];

  filter = '';
  userName = '';
  currentPage = 1;
  hasMore = true;

  ngOnInit(): void {
    this.userName = this.route.snapshot.params.userName;
    this.photos = this.route.snapshot.data.photos;
  }

  load(): void {
    this.photoService.photosFromUserPaginated(
      this.userName,
      ++this.currentPage
      ).subscribe(photos => {
        this.photos = this.photos.concat(photos);
        this.filter = '';
        if (!photos.length) { this.hasMore = false; }
    });
  }
}
