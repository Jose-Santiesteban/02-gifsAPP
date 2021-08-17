
import { Component,ElementRef,  ViewChild } from '@angular/core';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent{
@ViewChild('text') txtBuscar!: ElementRef<HTMLInputElement>;
 buscar(){
   console.log(this.txtBuscar.nativeElement.value);

   this.txtBuscar.nativeElement.value='';
 }

}