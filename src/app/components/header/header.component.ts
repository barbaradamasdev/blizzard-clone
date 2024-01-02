import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DropdownJogosComponent } from "../dropdownjogos/dropdownjogos.component";
import { DropdownesportesComponent } from "../dropdownesportes/dropdownesportes.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [CommonModule, DropdownJogosComponent, DropdownesportesComponent]
})
export class HeaderComponent {
  isDropdownVisible = false;
  isHeaderBlack = false;
  menuIconSrc = '../../../assets/menu-burguer.svg';
  activeSubmenuId: string | null = null;


  toggleDropdown(): void {
    this.isDropdownVisible = !this.isDropdownVisible;
    this.isHeaderBlack = !this.isHeaderBlack;
    this.menuIconSrc = this.isDropdownVisible ? '../../../assets/menu-open.svg' : '../../../assets/menu-burguer.svg';
  }

  toggleDropdownSubmenu(submenuId: string): void {
    this.activeSubmenuId = submenuId;
    this.isHeaderBlack = !this.isHeaderBlack;
  }
}
