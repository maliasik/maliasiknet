import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  posts: BlogPost[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data: BlogPost[]) => {
      this.posts = data;
    }, error => {
      console.error('Error fetching posts', error);
    });
  }
}
