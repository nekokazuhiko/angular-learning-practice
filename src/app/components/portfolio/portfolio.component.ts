import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  PageTitle = "Our Work ...sort of";
  PageDesc = "Our portfolio of work"; //Desc
  portfolio = {
    workItems: [
      {
        title: "Project Name 01",
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        imgAlt: "...",
        link:"/"
      },
      {
        title: "Project Name 02",
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        imgAlt: "...",
        link:"/"
      },
      {
        title: "Project Name 03",
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        imgAlt: "...",
        link:"/"
      },
      {
        title: "Project Name 04",
        imgSrc: "https://dummyimage.com/600x400/343a40/6c757d",
        imgAlt: "...",
        link:"/"
      },
    ]
  }
}
