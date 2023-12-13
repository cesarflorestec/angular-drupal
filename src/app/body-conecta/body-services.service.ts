import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BodyServicesService {

  constructor(private api: HttpClient) { }

  getJsonApi() {
    return this.api.get(environment.jsonAll)
  }
  getNewsApi() {
    return this.api.get(environment.news)
  }
  getPortada() {
    return this.api.get(environment.portada)
  }
}
