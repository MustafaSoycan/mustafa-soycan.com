import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NameAreaComponent } from './name-area/name-area.component';
import { LinksAreaComponent } from './links-area/links-area.component';
import { AboutMeAreaComponent } from './about-me-area/about-me-area.component';
import { SkillsAreaComponent } from './skills-area/skills-area.component';
import { PortfolioAreaComponent } from './portfolio-area/portfolio-area.component';
import { ContactAreaComponent } from './contact-area/contact-area.component';
import { FooterAreaComponent } from './footer-area/footer-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NameAreaComponent,
    LinksAreaComponent,
    AboutMeAreaComponent,
    SkillsAreaComponent,
    PortfolioAreaComponent,
    ContactAreaComponent,
    FooterAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
