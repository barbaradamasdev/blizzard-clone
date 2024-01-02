import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [DropdownComponent, CommonModule]
})
export class HeaderComponent {
  isDropdownVisible = false;
  menuIconSrc = '../../../assets/menu-burguer.svg';


  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
    this.menuIconSrc = this.isDropdownVisible ? '../../../assets/menu-open.svg' : '../../../assets/menu-burguer.svg';

  }
}
