import { Component } from '@angular/core';
import {RouterLink,RouterOutlet} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-blog-index',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgOptimizedImage],
  templateUrl: './blog-index.component.html',
  styleUrl: './blog-index.component.scss',
})
export class BlogIndexComponent {
  blogPosts = {
    postItem: [
      {
        category: 'News',
        title: 'Blog post title',
        link: 'blog-post',
        author: 'Kelly Rowan',
        date: 'March 12, 2023',
        imgSrc: 'https://dummyimage.com/600x350/ced4da/6c757d',
        imgAlt: '...',
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        category: 'Media',
        title: 'Another blog post title',
        link: 'blog-post',
        author: 'Evelyn Martinez',
        date: 'April 2, 2023',
        imgSrc: 'https://dummyimage.com/600x350/adb5bd/495057',
        imgAlt: '...',
        desc: "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
      {
        category: 'News',
        title: 'Initial blog post title',
        link: 'blog-post',
        author: 'Josiah Barclay',
        date: 'March 23, 2023',
        imgSrc: 'https://dummyimage.com/600x350/6c757d/343a40',
        imgAlt: '...',
        desc: "This text is a bit longer to illustrate the adaptive height of each card. Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    ],
  };
}
