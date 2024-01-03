import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconGameMenu } from '../../models/IconGameMenu';

@Component({
  selector: 'app-dropdown-jogos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdownjogos.component.html',
  styleUrl: './dropdownjogos.component.css'
})
export class DropdownJogosComponent {
  games: IconGameMenu[] = [
    { id: 1, title: 'Diablo II: Resurrected', logo: 'game-6'},
    { id: 2, title: 'Overwatch 2', logo: 'game-12'},
    { id: 3, title: 'World of Warcraft', logo: 'game-3'},
    { id: 4, title: 'Hearthstone', logo: 'game-2'},
    { id: 5, title: 'Heroes of storm', logo: 'game-11'},
    { id: 6, title: 'Warcraft III Reforged', logo: 'game-10'},
    { id: 7, title: 'Diablo IV', logo: 'game-1'},
    { id: 8, title: 'Diablo Immortal', logo: 'game-4'},
    { id: 9, title: 'Diablo III', logo: 'game-9'},
    { id: 10, title: 'StarCraft II', logo: 'game-5'},
    { id: 11, title: 'StarCraft Remastered', logo: 'game-8'},
    { id: 12, title: 'Arcade da Blizzard®', logo: 'game-7'},
  ];

  @Input() isBigScreen: boolean = false;

}
