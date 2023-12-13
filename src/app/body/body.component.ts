import { Component, OnInit } from '@angular/core';
import { BodyServicesService } from '../body-conecta/body-services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  portada: any = [{}]
  viewNews: any = [];
  params: string | undefined = '';
  constructor(
    private bodyServices: BodyServicesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.params = params['campus']
      this.selectedCatNews();
    })
  }
  ngOnInit() {

    if (!sessionStorage.getItem('portada')) {
      this.bodyServices.getPortada().subscribe(s => {
        // console.log('portada: ', s);
        this.portada = s;
        this.selectedCatNews()

      })
    } else {
      this.portada = JSON.parse(sessionStorage.getItem('portada')!);
      // console.log('portada sesion: ', this.portada);
      this.selectedCatNews()

    }

  }
  selectedCatNews() {
    // console.log('portada params:', this.params)
    if (this.params == undefined) {
      this.viewNews[0] = this.portada[this.portada.length - 1]
    } else {
      this.viewNews = this.portada.filter((f: any) => this.normalizarTexto(f?.attributes?.title) == this.params)
    }
    // console.log('portada news', this.viewNews)


  }
  normalizarTexto(texto: string | undefined) {
    texto = texto == undefined ? '' : texto;
    // Quitar espacios al inicio o al final
    texto = texto.trim();
    // Quitar acentos
    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Convertir a minúsculas
    texto = texto.toLowerCase();

    // Convertir espacios en guiones
    texto = texto.replace(/\s+/g, "-");
    // Quitar comas y puntos
    texto = texto.replace(",", "");
    texto = texto.replace(".", "");
    // console.log('portada texto: ', texto)
    return texto;
  }


}
