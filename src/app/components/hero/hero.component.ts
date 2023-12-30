import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { BannerComponent } from "../banner/banner.component";
import { Game } from '../../models/Game.model';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css',
    imports: [HeaderComponent, BannerComponent]
})
export class HeroComponent {
  currentGame?: Game;
  backgroundStyle?: string;

  updateBackground(game: Game): void {
    this.currentGame = game;
    this.backgroundStyle = `url('../../../assets/banner-hero/games/${this.currentGame.bgImage}')  no-repeat top center / cover`;
  }
}
