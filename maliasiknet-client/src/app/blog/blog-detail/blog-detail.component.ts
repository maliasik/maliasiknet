import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogPost } from 'src/app/models/blog-post.model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  post: BlogPost | undefined; // BlogPost tipini kullanarak post'un türünü belirtin

constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.blogService.getBlogPostById(+id).subscribe(
        (post: BlogPost) => { 
          this.post = post;
        },
        (error: any) => {
          console.error('Error fetching post', error);
        }
      );
    } else {
      console.error('Invalid blog post ID');
    }
  }
}
