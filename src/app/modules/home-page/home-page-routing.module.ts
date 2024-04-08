import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ListBlogComponent } from './list-blog/list-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreateEditBlogComponent } from './create-edit-blog/create-edit-blog.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        children: [
            {
                path: '',
                data: { breadcrumb: 'List of blogs' },
                component: ListBlogComponent,
            },
            {
                path: 'blog-detail/:id',
                data: { breadcrumb: 'Detail blogs' },
                component: BlogDetailComponent,
            },
            {
                path: 'create-blog',
                data: { breadcrumb: 'Create blogs' },
                component: CreateEditBlogComponent,
            },
            {
                path: 'edit-blog/:id',
                data: { breadcrumb: 'Edit blogs' },
                component: CreateEditBlogComponent,
            },
            { path: '', redirectTo: '', pathMatch: 'full' },
            { path: '**', redirectTo: '/notfound' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomePageRoutingModule {}
