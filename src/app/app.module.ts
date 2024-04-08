import { NgModule} from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutModule } from './layout/app.layout.module';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
    imports: [
        AppLayoutModule,
        AppRoutingModule,
        NgxSpinnerModule,
    ],
    declarations: [
        AppComponent,
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
