import { Component, Input, OnInit } from '@angular/core';
import { PhotoDataModel } from '../../photo-data.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: PhotoDataModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
