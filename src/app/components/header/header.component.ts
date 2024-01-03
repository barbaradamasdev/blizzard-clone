import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
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
  isArrowActive: { [key: string]: boolean } = {};
  menuIconSrc = '../../../assets/menu-burguer.svg';
  activeSubmenuId: string | null = null;
  dropdownTop = 50;
  isBigScreen = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.checkScreenSize();
  }

  checkScreenSize(): void {
    this.isBigScreen = window.innerWidth > 1020;
  }

  ngOnInit(): void {
    this.checkScreenSize();
  }

  toggleDropdownMenu(): void {
    this.menuIconSrc = this.isDropdownVisible ? '../../../assets/menu-burguer.svg' : '../../../assets/menu-open.svg';
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleDropdownSubmenu(submenuId: string): void {
    if (this.activeSubmenuId === submenuId) {
      this.activeSubmenuId = null;
      this.isArrowActive = {};
    } else {
      this.activeSubmenuId = submenuId;
      this.isArrowActive = { [submenuId]: true };
    }

    if (this.activeSubmenuId === 'jogos') {
      this.dropdownTop = -250;
    } else if (this.activeSubmenuId === 'esportes') {
      this.dropdownTop = -190;
    }
  }

}
