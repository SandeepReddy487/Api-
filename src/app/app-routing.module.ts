import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpComponent } from './http/http.component';


const routes: Routes = [
  // {path:"",redirectTo:"template",pathMatch:"full"},
  // {path:'http',component:HttpComponent},
  { path: 'first-component', component: HttpComponent },
  // { path: 'second-component', component: SecondComponent },
  { path: '',   redirectTo: 'http', pathMatch: 'full' }, 
  { path: '**', component: HttpComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
