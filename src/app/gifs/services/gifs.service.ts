import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _busquedas      : string[]  =[];
  private apikey          : string    ='WitLoGSgIlWYhoHOOjRTtAu6dCvcxNdP';
  public respuesta        : Gif[]     =[];
  private servicioUrl     : string    ='https://api.giphy.com/v1/gifs';
  constructor(private http: HttpClient) {
  
  this._busquedas=JSON.parse(localStorage.getItem("historial")!)||[]; 
  this.respuesta=JSON.parse(localStorage.getItem('ResultadosGifs')!)||[];
   }

  get busquedas(){
    return [...this._busquedas];
  }
  agregarBusqueda(query:string){
    query=query.trim().toUpperCase();
 
    if(!this._busquedas.includes(query)&&query!=''){
      this._busquedas.unshift(query);
      this._busquedas = this._busquedas.splice(0,10);
      localStorage.setItem("historial",JSON.stringify(this._busquedas));
      
    }
    const params      : HttpParams    =new HttpParams()
                                              .set('api_key',this.apikey)
                                              .set('q',query)
                                              .set('limit','10');
    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{params})
            .subscribe((resp)=>{
              console.log(resp.data);
              this.respuesta=resp.data;
              localStorage.setItem("ResultadosGifs",JSON.stringify(this.respuesta));
            })
  
          }
    
}
