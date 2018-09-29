import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDGModule } from 'mdg-pivot';

import { AppComponent } from './app.component';
import { SampleService } from './Services/sample.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDGModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
