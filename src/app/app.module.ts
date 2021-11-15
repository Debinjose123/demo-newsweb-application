import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingsComponent } from './topheadings/topheadings.component';
import { HttpClientModule } from '@angular/common/http';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessNewsComponent } from './business-news/business-news.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingsComponent,
    TechnewsComponent,
    BusinessNewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
