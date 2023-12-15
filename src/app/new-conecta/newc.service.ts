import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewcService {

  constructor(private api: HttpClient) { }
  getNewsId(idNews: string, type?: string) {
    switch (type) {
      case 'img':
        type = '/' + environment.imgPortada
        break;
      case 'cat':
        type = '/' + environment.catPortada
        break
      default:
        type = '';

        break;
    }
    return this.api.get(environment.newSelected + idNews + type)
  }

}
