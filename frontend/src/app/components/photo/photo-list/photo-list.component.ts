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

  photos: PhotoDataModel[];

  filter = '';

  ngOnInit(): void {
    const userName = this.route.snapshot.params.userName;
    this.photoService.photosFromUser(userName).subscribe(photo => {
      this.photos = photo;
    });
  }
}
