import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Game } from '../../models/Game.model';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  games: Game[] = [
    { id: 1, title: 'Retorna à escuridão com o game Diablo IV', name: 'Diablo IV', icon: 'game-1.png', description: 'O retorno de Lilith traz uma era de escuridão e sofrimento' , button: 'Jogue agora', src: 'diablo-animation-cover.png', trailer: 'diablo-animation.gif', bigIcon: 'diablo-logo.png', bgImage: 'diablo-bg.png'},
    { id: 2, title: 'Novo pacote de expansão de Hearthstone', name: 'Hearthstone', icon: 'game-2.png', description: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar' , button: 'Reserve agora na pré-venda', src: 'hearthstone-animation-cover.png', trailer: 'hearthstone-animation.gif', bigIcon: 'hearthstone-logo.png', bgImage: 'hearthstone-bg.png'},
    { id: 3, title: 'Desbrave as Terras Sombrias em Shadowlands!', name: 'Warcraft', icon: 'game-3.png', description: 'O que jaz além do mundo que você conhece?' , button: 'Reserve agora na pré-venda', src: 'wow-animation-cover.png', trailer: 'wow-animation.gif', bigIcon: 'wow-logo.png', bgImage: 'wow-bg.png'},
    { id: 4, title: 'Um capítulo inédito na saga de diablo', name: 'Diablo', icon: 'game-4.png', description: 'Enfrente males ancestrais e descubra o que aconteceu' , button: 'Jogue agora', src: 'diablo-immortal-animation-cover.png', trailer: 'diablo-immortal-animation.gif', bigIcon: 'diablo-immortal-logo.png', bgImage: 'diablo-immortal-bg.png'},

    { id: 5, title: 'O supremo jogo de estratégia em tempo real', name: 'StarCraft', icon: 'game-5.png', description: 'Jogue do seu jeito' , button: 'Jogue agora', src: 'starcraft-2-animation-cover.png', trailer: 'starcraft-2-animation.gif', bigIcon: 'starcraft-2-logo.png', bgImage: 'starcraft-2-bg.png'},
  ];

  @Output() gameChanged = new EventEmitter<Game>();
  @Output() gameIdChanged = new EventEmitter<number>();

  currentGame: Game = this.games[0];
  isTrailerPlaying: boolean = false;

  selectGame(game: Game): void {
    this.currentGame = game;
    this.gameChanged.emit(game);
    this.gameIdChanged.emit(game.id);
  }

  startTrailer() {
    this.isTrailerPlaying = true;
  }

  stopTrailer() {
    this.isTrailerPlaying = false;
  }
}
