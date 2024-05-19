// src/app/blog/blog-detail/blog-detail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from 'src/app/models/blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  post: BlogPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // C# tarafındaki API'yi çağırarak belirli bir blog gönderisinin detaylarını al
        this.blogService.getBlogPostByIdFromApi(+id).subscribe(
          (post) => {
            this.post = post;
          },
          (error) => {
            console.error('Blog detayları alınamadı:', error);
          }
        );
      }
    });
  }
}
