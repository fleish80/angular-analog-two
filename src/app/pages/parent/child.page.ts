import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';

export const routeMeta: RouteMeta = {
  title: 'Parent Child',
  canActivate: [
    () => {
      console.log('rote meta child');
      return false;
    },
  ],
};

@Component({
  selector: 'app-parent-child',
  standalone: true,
  template: ` <h2>Parent Child</h2> `,
  styles: [],
})
export default class ParentChildPageComponent {}
