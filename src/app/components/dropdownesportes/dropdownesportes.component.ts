import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconGameMenu } from '../../models/IconGameMenu';

@Component({
  selector: 'app-dropdown-esportes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdownesportes.component.html',
  styleUrl: './dropdownesportes.component.css'
})
export class DropdownesportesComponent {
  games: IconGameMenu[] = [
    { id: 1, title: 'Hearthstone® masters', logo: 'torneio-1'},
    { id: 2, title: 'Campeonato Mundial de Arena WoW®', logo: 'torneio-2'},
    { id: 3, title: 'StarCraft® II WCS', logo: 'torneio-3'},
    { id: 4, title: 'Copa Mundial de Overwatch®', logo: 'torneio-4'},
    { id: 5, title: 'Liga de Overwatch®', logo: 'torneio-5'},
  ];

  @Input() isBigScreen: boolean = false;

}
