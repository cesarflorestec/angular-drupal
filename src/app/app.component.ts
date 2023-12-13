import { Component, OnInit } from '@angular/core';
import { BodyServicesService } from './body-conecta/body-services.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private bodyServices: BodyServicesService) { }
  ngOnInit() {
    this.bodyServices.getJsonApi().subscribe((s: any) => {
      sessionStorage.setItem('jsonAll', JSON.stringify(s))
    })
    this.bodyServices.getPortada().subscribe((p: any) => {
      sessionStorage.setItem('portada', JSON.stringify(p.data))
    })
  }

}
