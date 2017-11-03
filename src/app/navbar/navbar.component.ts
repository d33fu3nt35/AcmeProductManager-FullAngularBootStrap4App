import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {
  isActiveLink(link: string) {
    // return this.router.isActive(link);
  }

  constructor(private router: Router) {
  }
}
