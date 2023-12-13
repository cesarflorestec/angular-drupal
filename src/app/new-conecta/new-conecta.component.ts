import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-conecta',
  templateUrl: './new-conecta.component.html',
  styleUrls: ['./new-conecta.component.scss']
})
export class NewConectaComponent implements OnInit {
  @Input() news: any[] = [];
  @Input() subTitle: string = '';
  constructor() { }
  ngOnInit(): void {
    console.log('news', this.news)

  }

}
