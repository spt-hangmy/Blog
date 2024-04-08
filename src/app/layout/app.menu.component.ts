import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'List of blogs', icon: 'pi pi-desktop',
                items: [
                    { label: 'list', icon: 'pi pi-list', routerLink: ['/'] },
                ]
            },
        ];
    }
}
