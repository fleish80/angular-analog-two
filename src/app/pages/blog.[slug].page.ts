import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { MarkdownComponent, injectContent } from '@analogjs/content';
import { Post } from './post';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [MarkdownComponent],
  template: `
    <h1>First blog post</h1>
    {{slug()}}
  `,
  styles: [],
})
export default class BlogPostComponent {
    posts$ = injectContent<Post>()
    #route = inject(ActivatedRoute);
    slug = toSignal(this.#route.paramMap.pipe(map(params => params.get('slug'))));
}
