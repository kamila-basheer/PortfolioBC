import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { SamplesComponent } from './samples/samples.component';

const routes: Routes = [
  {path:'', component:BodyComponent},
  {path:'about', component:AboutComponent},
  {path:'samples', component:SamplesComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
