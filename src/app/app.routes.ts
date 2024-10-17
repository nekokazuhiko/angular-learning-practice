import { Routes } from '@angular/router';
// import { BlogComponent } from './components/blog/blog.component';
// import {BlogIndexComponent} from './components/blog/blog-index/blog-index.component';
// import {BlogPostComponent} from "./components/blog/blog-post/blog-post.component";

export const routes: Routes = [

  {
    title: 'Angular Learning Practice | Home',
    path: 'home',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
  },
  {
    title: 'Angular Learning Practice | about',
    path: 'about',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
  },
  {
    title: 'Angular Learning Practice | blog',
    path: 'blog',
    loadComponent: () => import('./components/blog/blog.component').then(m => m.BlogComponent),
    children: [
      {
        title: 'Angular Learning Practice | blog',
        path: 'blog-index',
        loadComponent: () => import('./components/blog/blog-index/blog-index.component').then(m => m.BlogIndexComponent),
      },
      {
        title: 'Angular Learning Practice | blog',
        path: 'blog-post',
        loadComponent: () => import('./components/blog/blog-post/blog-post.component').then(m => m.BlogPostComponent),
      }
    ]
  },
  {
    title: 'Angular Learning Practice | faq',
    path: 'faq',
    loadComponent: () => import('./components/faq/faq.component').then(m => m.FaqComponent),
    // component: FaqComponent,
  },
  {
    title: 'Angular Learning Practice | contact',
    path: 'contact',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    // component: ContactComponent,
  },
  {
    title: 'Angular Learning Practice | pricing',
    path: 'pricing',
    loadComponent: () => import('./components/pricing/pricing.component').then(m => m.PricingComponent),
    // component: PricingComponent,
  },
  {
    title: 'Angular Learning Practice | portfolio',
    path: 'portfolio',
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    // component: PortfolioComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadComponent: () => import('./components/errors/errors.component').then(m => m.ErrorsComponent),
    // component: ErrorsComponent,
  },
];
