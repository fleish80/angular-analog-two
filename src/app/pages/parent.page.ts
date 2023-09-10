import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Parent Route</h1>
    <a routerLink="/parent">Home</a>
    <a routerLink="/parent/child">Child</a>
    <a routerLink="/parent/adopt">Adopt</a>
    <router-outlet/>
  `,
  styles: [],
})
export default class ParentPageComponent {
}
