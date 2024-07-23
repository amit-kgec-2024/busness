import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

interface NavItem {
  title: string;
  link: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
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
