import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { ResponseComponent } from './response/response.component';
import { MovieService } from './movie.service';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule

  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
