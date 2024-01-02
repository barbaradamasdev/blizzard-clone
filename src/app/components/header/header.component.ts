import { Component } from '@angular/core';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [DropdownComponent]
})
export class HeaderComponent {

}
