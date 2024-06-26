import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav'
import { BlogRoutingModule } from './blog-routing.module';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatGridListModule
  ]
})
export class BlogModule { }