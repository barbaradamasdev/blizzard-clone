import { Component } from '@angular/core';
import { CardGame } from '../../models/CardGame.model';
import { CardComponent } from "../card/card.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.css',
    imports: [CardComponent]
})
export class MainComponent {
  games: CardGame[] = [
    { id: 1, title: 'Diablo II: Resurrected', poster: 'diablo ii poster', logo: 'diablo ii logo', type: 'RPG de ação'},
    { id: 2, title: 'Overwatch', poster: 'overwatch poster', logo: 'overwatch logo', type: 'Ação em equipe'},
    { id: 3, title: 'Overwatch 2', poster: 'overwatch 2 poster', logo: 'overwatch 2 logo', type: 'Ação em equipe'},
    { id: 4, title: 'World of Warcraft Classic', poster: 'wow classic poster', logo: 'wow classic logo', type: 'RPG multijogador em massa'},
    { id: 5, title: 'Hearthstone', poster: 'hearthstone poster', logo: 'hearthstone logo', type: 'Jogo de cards estratégicos'},
    { id: 6, title: 'Heroes of storm', poster: 'Heroes of storm poster', logo: 'Heroes of storm logo', type: 'RPG de ação'},
    { id: 7, title: 'Diablo IV', poster: 'diablo 4 poster', logo: 'diablo 4 logo', type: 'RPG de ação'},
    { id: 8, title: 'Warcraft III Reforged', poster: 'Warcraft III Reforged poster', logo: 'Warcraft III Reforged logo', type: 'RPG de ação'},
    { id: 9, title: 'Diablo III', poster: 'Diablo III poster', logo: 'Diablo III logo', type: 'RPG de ação'},
    { id: 10, title: 'StarCraft II', poster: 'StarCraft II poster', logo: 'StarCraft II logo', type: 'RPG de ação'},
    { id: 11, title: 'StarCraft Remastered', poster: 'StarCraft Remastered poster', logo: 'StarCraft Remastered logo', type: 'RPG de ação'},
  ];
}
