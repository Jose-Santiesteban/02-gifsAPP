import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {


  private _busquedas:string[] =[];
  private apikey: string='WitLoGSgIlWYhoHOOjRTtAu6dCvcxNdP';
  public respuesta:Gif[]=[];
  constructor(private http: HttpClient) { }

  get busquedas(){
    return [...this._busquedas];
  }
  agregarBusqueda(query:string){
    query=query.trim().toUpperCase();
 
    if(!this._busquedas.includes(query)&&query!=''){
      this._busquedas.unshift(query);
      this._busquedas = this._busquedas.splice(0,10);
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=WitLoGSgIlWYhoHOOjRTtAu6dCvcxNdP&q=${query}&limit=10`)
            .subscribe((resp)=>{
              console.log(resp.data);
              this.respuesta=resp.data;
            })
  
          }
    
}
