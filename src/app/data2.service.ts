import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  httpclient:any;

  constructor(private http2:HttpClient) { }
  getData():Observable<any>{
    return this.http2.get<any>(" https://www.anapioficeandfire.com/api/characters");
    console.log(this.getData)
  }
}
