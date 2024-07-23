import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';

interface ImgItm {
  src: string;
}
interface Servuses {
  numbers: number;
}
interface Projects {
  title: string;
  names: string;
  src: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  imgData1: ImgItm[]=[
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-BNP.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Aviva.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Lepaya.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Sbab.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-TUI.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Skyscanner.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Dolby.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Warner-New.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Abbey-Road-Studios-NEW.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Voicy.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Ooredoo.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Orlen.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Eko-Okna.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Play.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Empik.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-PZU.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Hello-Fresh.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Herbalife.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-Brainly.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-MBank.svg"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/hero_logo-HID.svg"},
  ];
  slideImage: ImgItm[]=[
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/Dolby.io_.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/04/NextbankAI.png.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/ORLEN.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/TUI.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/Warner.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/ORLEN.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/TUI.jpg.webp"},
    {src: "https://www.miquido.com/wp-content/uploads/2024/05/Warner.jpg.webp"},
  ]
  serviceData: Servuses[]=[
    {numbers: 1},
    {numbers: 2},
    {numbers: 3},
    {numbers: 4},
    {numbers: 5},
    {numbers: 6},
    {numbers: 7},
  ]

  projectData: Projects[]= [
    {
      title: "The 50 Best Apps of the Year",
      names: "Time Magazine",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-time.svg"
    },
    {
      title: "Europes fastest growing companies",
      names: "Financial Times",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-ft.svg"
    },
    {
      title: "Experimental & Innovations Brozne",
      names: "The Lovie Awards, 2023",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-lovie.svg"
    },
    {
      title: "Product Category Winner",
      names: "UX Design Awards, 2023",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-ux_design_awards-1.svg"
    },
    {
      title: "Best Visual Design",
      names: "Webby, 2023",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-webby.svg"
    },
    {
      title: "Best Business App",
      names: "Mobile Trends, 2021",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-mta.svg"
    },
    {
      title: "Best Visual Design",
      names: "PGD, 2021",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-pgd.svg"
    },
    {
      title: "Best Web Design Nominee",
      names: "Awwwards, 2021",
      src: "https://www.miquido.com/wp-content/uploads/2024/04/logo_awards-awwwards.svg"
    },
  ]
}
