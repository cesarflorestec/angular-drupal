import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NewcService {

  constructor(private api: HttpClient) { }
  getNewsId(idNews: string) {
    return this.api.get(environment.newSelected + idNews)
  }
}
