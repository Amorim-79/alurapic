import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo.service';

import { PhotoDataModel } from '../photo-data.model';

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<PhotoDataModel[]>> {
    constructor(private photoService: PhotoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PhotoDataModel[]> {
        const userName = route.params.userName;
        return this.photoService.photosFromUser(userName);
    }
}
