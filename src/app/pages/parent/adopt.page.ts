import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
  title: 'Parent Adopt',
  canActivate: [(route) => new Promise((resolve) => setTimeout(() => resolve(true), 3000))]
}

@Component({
  selector: 'app-parent-adopt',
  standalone: true,
  template: `
    <h2>Parent Adopt</h2>
  `,
  styles: [],
})
export default class ParentAdoptPageComponent {

}
