import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Data3Service } from '../data3.service';

@Component({
  selector: 'app-http3',
  templateUrl: './http3.component.html',
  styleUrls: ['./http3.component.css']
})
export class Http3Component implements OnInit {

  getData:any[]=[];
  constructor(private data:Data3Service) { }

  ngOnInit() {
    this.data.getData().subscribe((res)=>{
  this.getData=res
  console.log(res);

    });
  }

}
