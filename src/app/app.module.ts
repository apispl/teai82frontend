import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NoteService} from './services/note.service';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {Router, RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
