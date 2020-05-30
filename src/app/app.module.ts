import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { HttpComponent } from './http/http.component';
import { Http2Component } from './http2/http2.component';
import { Http3Component } from './http3/http3.component';

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    Http2Component,
    Http3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [     AppComponent ]
})
export class AppModule { }
