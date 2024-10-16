import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactComponent } from './components/contact/contact.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ErrorsComponent } from './components/errors/errors.component';
import {BlogIndexComponent} from './components/blog/blog-index/blog-index.component';
import {BlogPostComponent} from "./components/blog/blog-post/blog-post.component";

export const routes: Routes = [

  {
    title: 'Angular Learning Practice | Home',
    path: 'home',
    component: HomeComponent,
  },
  {
    title: 'Angular Learning Practice | about',
    path: 'about',
    component: AboutComponent,
  },
  {
    title: 'Angular Learning Practice | blog',
    path: 'blog',
    component: BlogComponent,
    children: [
      {
        title: 'Angular Learning Practice | blog',
        path: 'blog-index',
        component: BlogIndexComponent,
      },
      {
        title: 'Angular Learning Practice | blog',
        path: 'blog-post',
        component: BlogPostComponent,
      }
    ]
  },
  {
    title: 'Angular Learning Practice | faq',
    path: 'faq',
    component: FaqComponent,
  },
  {
    title: 'Angular Learning Practice | contact',
    path: 'contact',
    component: ContactComponent,
  },
  {
    title: 'Angular Learning Practice | pricing',
    path: 'pricing',
    component: PricingComponent,
  },
  {
    title: 'Angular Learning Practice | portfolio',
    path: 'portfolio',
    component: PortfolioComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: ErrorsComponent,
  },
];
