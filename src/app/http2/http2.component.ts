import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Data2Service } from '../data2.service';
@Component({
  selector: 'app-http2',
  templateUrl: './http2.component.html',
  styleUrls: ['./http2.component.css']
})
export class Http2Component implements OnInit {

  getData:any[]=[];
  constructor(private data:Data2Service) { }

  ngOnInit() {
    this.data.getData().subscribe((res)=>{
  this.getData=res
  console.log(res);

    });

  }}
