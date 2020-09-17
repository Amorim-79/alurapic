import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PhotoDataModel } from './photo-data.model';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  private BASE_URL = 'http://localhost:3000';

  photosFromUser(userName: string): Observable<PhotoDataModel[]> {
    return this.http.get<PhotoDataModel[]>(`${this.BASE_URL}/${userName}/photos`);
  }
}
