import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
    {
        path: '', component: AppLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./modules/home-page/home-page.module').then((m) => m.HomePageModule),
            },
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
