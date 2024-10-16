import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  // styleUrl: './blog.component.scss',
})
export class BlogComponent {}
