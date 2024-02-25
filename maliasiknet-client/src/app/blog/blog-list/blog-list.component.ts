import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  blogPosts: BlogPost[] = []; // Bu dizi servisten gelecek verileri tutmak için kullanılacak.

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogPosts = this.blogService.getBlogPosts(); // Servisten veriler alınıp diziye atandı.
  }
}