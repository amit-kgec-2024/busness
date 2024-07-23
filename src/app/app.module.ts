import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';


import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IndustriesComponent } from './industries/industries.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      AppComponent,
      ServiceComponent,
      TechnologiesComponent,
      IndustriesComponent,
      PortfolioComponent,
      CompanyComponent,
      BlogComponent,
      ResourcesComponent,
      ContactComponent,
      HeaderComponent,
      FooterComponent,
      MatIconModule,
      MatMenuModule,
      HomeComponent
    ],
    providers: [],
    bootstrap: []
})
export class AppModule { }
