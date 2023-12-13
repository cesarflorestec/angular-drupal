import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private api: HttpClient) { }
  getMenuCampus() {
    return this.api.get(environment.campus)
  }
}
