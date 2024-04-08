import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { LayoutService } from './layout/service/app.layout.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig,  private layoutService: LayoutService) { }

    ngOnInit(): void {
        this.primengConfig.ripple = true;
        //optional configuration with the default configuration

        this.layoutService.config = {
            ripple: false, //toggles ripple on and off
            inputStyle: 'outlined', //default style for input elements
            menuMode: 'static', //layout mode of the menu, valid values are "static", "overlay", "slim", "compact" and "horizontal"
            colorScheme: 'light', //color scheme of the template, valid values are "light", "dim" and "dark"
            theme: 'indigo', //default component theme for PrimeNG, see theme section for available values
            layoutTheme: 'colorScheme', //theme of the layout, see layout theme section for available values
            scale: 14, //size of the body font size to scale the whole application
        };
    }
}

