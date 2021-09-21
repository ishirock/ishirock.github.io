import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NewsApiService} from './services/news-api.service';
import { PhotoDialog, PhotosComponent } from './photos/photos.component';
import { NewsComponent } from './news/news.component';
import {SafeHtmlPipe} from './news/SafeHtmlPipe';
import { MatDialog, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    NewsComponent,
    SafeHtmlPipe,
    PhotoDialog
  ],
  entryComponents: [PhotoDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

