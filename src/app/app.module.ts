import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialSharedModule } from './shared/material-shared/material-shared.module';
import { AccordionModule} from 'primeng/primeng';


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialSharedModule,
    AppRoutingModule,
    AccordionModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
