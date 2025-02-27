import { DynamicService } from './shared/dynamic.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './Components/dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DynamicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
