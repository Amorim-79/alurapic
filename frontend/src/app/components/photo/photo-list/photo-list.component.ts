import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoDataModel } from '../photo-data.model';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  photos: PhotoDataModel[];

  filter = '';

  ngOnInit(): void {
    this.photos = this.route.snapshot.data.photos;
  }
}
