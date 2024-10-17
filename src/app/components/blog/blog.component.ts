import { Component } from '@angular/core';
import {RouterOutlet, RouterLink} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: '<router-outlet></router-outlet>',
  // styleUrl: './blog.component.scss',
})
export class BlogComponent {}
