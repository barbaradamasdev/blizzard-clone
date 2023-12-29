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
    { id: 4, title: 'Retorna à escuridão com o game Diablo IV', name: 'Diablo', icon: 'game-4.png', description: 'O retorno de Lilith traz uma era de escuridão e sofrimento' , button: 'Jogue agora', src: 'diablo-animation-cover.png', trailer: 'diablo-animation.gif', bigIcon: 'diablo-logo.png', bgImage: 'diablo-bg.png'},
    { id: 5, title: 'Retorna à escuridão com o game Diablo IV', name: 'StarCraft', icon: 'game-5.png', description: 'O retorno de Lilith traz uma era de escuridão e sofrimento' , button: 'Jogue agora', src: 'diablo-animation-cover.png', trailer: 'diablo-animation.gif', bigIcon: 'diablo-logo.png', bgImage: 'diablo-bg.png'},
  ];

  @Output() gameChanged = new EventEmitter<Game>();

  currentGame: Game = this.games[0];
  isTrailerPlaying: boolean = false;

  selectGame(game: Game): void {
    this.currentGame = game;
    this.gameChanged.emit(game);
  }

  startTrailer() {
    this.isTrailerPlaying = true;
  }

  stopTrailer() {
    this.isTrailerPlaying = false;
  }
}
