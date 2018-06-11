import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarCollapsed = true;
  constructor(private router: Router) {}

  goHome() {
    this.router.navigate[''];
  }

  goMedia() {
    this.router.navigate['media'];
  }

  goRegister() {
    this.router.navigate['register'];
  }
}
