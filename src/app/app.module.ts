import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NameAreaComponent } from './name-area/name-area.component';
import { LinksAreaComponent } from './links-area/links-area.component';
import { AboutMeAreaComponent } from './about-me-area/about-me-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameAreaComponent,
    LinksAreaComponent,
    AboutMeAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
