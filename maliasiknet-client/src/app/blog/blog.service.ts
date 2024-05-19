import { Injectable } from '@angular/core';
import { BlogPost } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Angular 15 Best Practices',
      content: 'Discussing the best practices for Angular 15 development...',
      author: 'Jane Doe',
      createdAt: new Date('2024-01-01T12:00:00'),
      updatedAt: new Date('2024-01-05T15:00:00'),
      tags: ['Angular', 'Best Practices', 'Development'],
      summary: 'An overview of the best practices in Angular 15 development.',
      thumbnailImageUrl: 'https://example.com/thumbnails/angular.png',
      commentsCount: 5,
      isPublished: true,
      category: 'Web Development',
    },
    {
      id: 2,
      title: 'Understanding Dependency Injection',
      content: 'A deep dive into the concept of dependency injection in software architecture...',
      author: 'John Smith',
      createdAt: new Date('2024-02-10T08:30:00'),
      tags: ['Dependency Injection', 'Design Patterns', 'Architecture'],
      summary: 'Explaining the core concepts of dependency injection and its advantages.',
      thumbnailImageUrl: 'https://example.com/thumbnails/dependency-injection.png',
      commentsCount: 3,
      isPublished: true,
      category: 'Software Architecture',
    },
    // ...daha fazla blog post verisi
  ];

  constructor() { }

  getBlogPosts(): BlogPost[] {
    return this.blogPosts;
  }

  getBlogPostById(id: number): BlogPost | undefined {
    return this.blogPosts.find(post => post.id === id);
  }

  getBlogPostsByCategory(category: string): BlogPost[] {
    return this.blogPosts.filter(post => post.category === category);
  }

  // ...Diğer metodlar gerektiğinde burada tanımlanabilir.
}