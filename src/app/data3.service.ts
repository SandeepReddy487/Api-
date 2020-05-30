import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  httpclient:any;

  constructor(private http3:HttpClient) { }
  getData():Observable<any>{
    return this.http3.get<any>("https://www.anapioficeandfire.com/api/houses");
    console.log(this.getData)
  }
}
