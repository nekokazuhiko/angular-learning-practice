import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  banner = {
    title: '這是BANNER的大標題',
    desc: '描述測試描述測試描述測試描述測試描述測試描述測試描述測試描述測試',
    imgSrc: 'https://dummyimage.com/600x400/343a40/6c757d',
    imgAlt: '...',
    //陣列的sample吧QQ
    ctaBtns: [
      {
        text: 'Get Starrrrrrrted',
        type: 'btn-primary',
        link: '#',
      },
      {
        text: 'Learn Moooooore',
        type: 'btn-outline-light',
        link: '#',
      },
    ],
  };
}
