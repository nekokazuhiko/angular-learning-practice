import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {

  postTitle = "Welcome to Blog Post!";

}
