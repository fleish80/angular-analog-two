import { injectContentFiles } from '@analogjs/content';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from './post';



@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [NgFor, RouterLink],
  template: `
    <ul>
        <li *ngFor="let post of posts">
            <a routerLink="/blog/{{post.attributes.slug}}">{{post.attributes.title}}</a>
        </li>
    </ul>
  `,
  styles: [],
})
export default class PostsPageComponent {
    posts = injectContentFiles<Post>();
}
