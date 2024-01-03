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


  toggleDropdownMenu(): void {
    this.menuIconSrc = this.isDropdownVisible ? '../../../assets/menu-open.svg' : '../../../assets/menu-burguer.svg';
    this.isDropdownVisible = !this.isDropdownVisible;
    //let check = this.isDropdownVisible ? this.toggleDropdownSubmenu : null;
  }

  toggleDropdownSubmenu(submenuId: string): void {
    //this.isDropdownVisible = true;
    this.activeSubmenuId = submenuId;
    this.isHeaderBlack = !this.isHeaderBlack;

    /* switch (this.activeSubmenuId) {
      case 'jogos':
        document.documentElement.style.setProperty('--margin-top-dropdown', '70px');
        break;
      case 'esportes':
        document.documentElement.style.setProperty('--margin-top-dropdown', '90px');
        break;
    } */
  }
}
