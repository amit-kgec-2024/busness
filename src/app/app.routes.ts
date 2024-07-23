import { Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { IndustriesComponent } from './industries/industries.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CompanyComponent } from './company/company.component';
import { BlogComponent } from './blog/blog.component';
import { ResourcesComponent } from './resources/resources.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'industriest', component: TechnologiesComponent },
    { path: 'industries', component: IndustriesComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'company', component: CompanyComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'contact', component: ContactComponent },
  ];