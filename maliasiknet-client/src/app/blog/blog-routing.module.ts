import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: BlogListComponent },
  { path: ':id', component: BlogDetailComponent } //Burada bir nevi linklendirme yaptım. Blog sayfası ve yazıya tıklayınca açılacak sayfa. Bu sayfa id tagını alacak.
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
