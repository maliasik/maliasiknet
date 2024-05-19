// src/app/blog/blog-list/blog-list.component.ts

import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/models/blog-post.model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css'],
})
export class BlogListComponent implements OnInit {
  allBlogPosts: BlogPost[] = []; // Tüm blogları tutan dizi
  blogPosts: BlogPost[] = []; // Kategoriye göre filtrelenmiş blogları tutan dizi
  selectedCategory: string = 'Web Development'; // Gösterilecek kategori

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    // Tüm blogları al
    this.allBlogPosts = this.blogService.getBlogPosts();
    
    // Seçilen kategoriye göre filtrele
    this.filterBlogPosts();
  }

  // Kategori değiştikçe çağrılacak metod
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    this.filterBlogPosts();
  }

  // Blogları kategoriye göre filtrele
  private filterBlogPosts() {
    this.blogPosts = this.allBlogPosts.filter(post => post.category === this.selectedCategory);
  }
}
