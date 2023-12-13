import { Component, OnInit } from '@angular/core';
import { BodyServicesService } from './body-services.service';

@Component({
  selector: 'app-body-conecta',
  templateUrl: './body-conecta.component.html',
  styleUrls: ['./body-conecta.component.scss']
})
export class BodyConectaComponent implements OnInit {
  constructor(private bodyServices: BodyServicesService) {
  }
  ngOnInit() {

  }


}
