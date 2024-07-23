import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

interface NavItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    headerData: NavItem[] = [
      { title: "Service", link: "/service" },
    { title: "Technologies", link: "/technologies" },
    { title: "Industries", link: "/industries" },
    { title: "Portfolio", link: "/portfolio" },
    { title: "Company", link: "/company" },
    { title: "Blog", link: "/blog" },
    { title: "Resources", link: "/resources" },
    { title: "Contact us", link: "/contact" }
   ];
}
