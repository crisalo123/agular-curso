import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/herores.module';
import { ContadorModules } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModules
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]

 
})
export class AppModule { }
