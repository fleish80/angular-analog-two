import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownComponent, injectContent } from '@analogjs/content';
import { Post } from './post';
import { injectActivatedRoute } from '@analogjs/router';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
    <h1>First blog post</h1>
    <p>{{slug()}}</p>
    <p>{{post()?.content}}</p>
  `,
  styles: [],
})
export default class BlogPostComponent {
    post = toSignal(injectContent<Post>());
    #route = injectActivatedRoute(); // same as inject(ActivatedRoute);
    slug = toSignal(this.#route.paramMap.pipe(map(params => params.get('slug'))));
}
