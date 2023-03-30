import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './crud/informacion/informacion.component';
//Nueva Informacion
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
