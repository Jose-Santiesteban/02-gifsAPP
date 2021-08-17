
import { Component,ElementRef,  ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
@ViewChild('text') txtBuscar!: ElementRef<HTMLInputElement>;
 buscar(){
  const valor=this.txtBuscar.nativeElement.value;
  this.gifsServices.agregarBusqueda(valor);
  this.txtBuscar.nativeElement.value='';
  console.log(this.gifsServices.busquedas);
 }
 constructor(private gifsServices:GifsService){}

}
