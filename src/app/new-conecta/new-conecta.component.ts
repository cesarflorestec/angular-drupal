import { Component, Input, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { NewcService } from './newc.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-new-conecta',
  templateUrl: './new-conecta.component.html',
  styleUrls: ['./new-conecta.component.scss']
})
export class NewConectaComponent implements OnInit {
  @Input() news: any = [];
  @Input() subTitle: string = '';
  newsAll: any = [];
  newsAllImg: any = [];
  newsAllCat: any = [];
  constructor(private newsSelected: NewcService) { }
  ngOnInit(): void {
    let id: any[] = []
    this.news.data.forEach((e: any) => {
      id.push(e.id);
    });
    let calls: any = id.map(i => this.newsSelected.getNewsId(i));
    let callImg: any = id.map(i => this.newsSelected.getNewsId(i, 'img'));
    let callCat: any = id.map(i => this.newsSelected.getNewsId(i, 'cat'));
    forkJoin(calls).subscribe(r => {
      this.newsAll = r;
      console.log('news ' + this.subTitle + ': ', this.newsAll)
    })
    forkJoin(callImg).subscribe(r => {
      this.newsAllImg = r;
      console.log('news img ' + this.subTitle + ': ', this.newsAllImg)
    })
    forkJoin(callCat).subscribe(r => {
      this.newsAllCat = r;
      console.log('news cat ' + this.subTitle + ': ', this.newsAllCat)
    })

  }
  getattd(i: number) {
    return environment.host + this.newsAllImg[i]?.data?.attributes?.uri?.url;
  }
  getCat(i: number) {
    return this.newsAllCat[i]?.ºdata[0]?.attributes?.name;
  }

}
