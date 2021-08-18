import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  buscar(arg: string){
    this.gifsServices.agregarBusqueda(arg);
  }
  get listado(){
    return this.gifsServices.busquedas;
  }
  constructor(private gifsServices:GifsService){}

}
