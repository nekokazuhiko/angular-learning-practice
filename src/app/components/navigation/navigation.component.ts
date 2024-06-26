import { Component } from '@angular/core';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    NgbCollapseModule, NgbDropdownModule, RouterLink, RouterLinkActive, RouterOutlet
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  isMenuCollapsed = true;
  isCollapsed = true;
}
