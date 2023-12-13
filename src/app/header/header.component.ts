import { Component, OnInit } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuCampus: any = [];
  constructor(private menuServices: MenuService) { }
  ngOnInit() {
    this.menuServices.getMenuCampus().subscribe((campus: any) => {
      this.menuCampus = campus.data;
      console.log('campus: ', this.menuCampus)
      Object.keys(this.menuCampus).forEach((e: any) => {
        console.log(this.menuCampus[e].attributes.title + ' - ' + this.menuCampus[e].attributes.path.alias + ' - ' + this.menuCampus[e].id)

      });

    })
  }

}
