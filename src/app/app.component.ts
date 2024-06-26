import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { BlogComponent } from "./components/blog/blog.component";
import { FaqComponent } from "./components/faq/faq.component";
import { ContactComponent } from "./components/contact/contact.component";
import { PricingComponent } from "./components/pricing/pricing.component";
import { PortfolioComponent } from './components/portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NavigationComponent,
    FooterComponent,
    BlogComponent,
    FaqComponent,
    PortfolioComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PricingComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-learning-practice';
}
