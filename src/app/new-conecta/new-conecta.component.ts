import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { NewcService } from './newc.service';

@Component({
  selector: 'app-new-conecta',
  templateUrl: './new-conecta.component.html',
  styleUrls: ['./new-conecta.component.scss']
})
export class NewConectaComponent implements OnInit {
  @Input() news: any = [];
  @Input() subTitle: string = '';
  newsAll: any = [];
  constructor(private newsSelected: NewcService) { }
  ngOnInit(): void {
    let id: any[] = []
    this.news.data.forEach((e: any) => {
      id.push(e.id);
    });
    let calls: any = id.map(i => this.newsSelected.getNewsId(i))
    forkJoin(calls).subscribe(r => {
      this.newsAll = r;
      console.log('news ' + this.subTitle + ': ', this.newsAll)
    })

  }

}
