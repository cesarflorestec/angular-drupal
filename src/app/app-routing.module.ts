import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoticiaComponent } from './noticia/noticia.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent, pathMatch: 'full' },
  { path: 'noticia/:noticia', component: NoticiaComponent },
  { path: 'noticias/:campus', component: BodyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
