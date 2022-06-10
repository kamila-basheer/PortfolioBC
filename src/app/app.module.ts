import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { FooterComponent } from './footer/footer.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { SamplesComponent } from './samples/samples.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestimonyComponent,
    FooterComponent,
    LandingComponent,
    ServicesComponent,
    AboutComponent,
    SamplesComponent,
    ContactComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
