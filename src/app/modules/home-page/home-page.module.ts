import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ButtonModule } from 'primeng/button';
import { CommentBlogComponent } from './comment-blog/comment-blog.component';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';
import { EditorModule } from "primeng/editor";
import { FileUploadModule } from "primeng/fileupload";
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    ListBlogComponent,
    HomePageComponent,
    BlogDetailComponent,
    CommentBlogComponent,
    CreateEditBlogComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    EditorModule,
    FileUploadModule,
    ToastModule,
    DialogModule
  ]
})
export class HomePageModule { }
