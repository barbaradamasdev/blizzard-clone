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
  selectedGameId?: number;

  onGameIdChanged(id: number): void {
    this.selectedGameId = id;
    console.log(id)
    console.log(this.selectedGameId)


    switch (id) {
      case 1:
        this.setAfterWidth(20);
        break;
      case 2:
        this.setAfterWidth(40);
        break;
      case 3:
        this.setAfterWidth(60);
        break;
      case 4:
        this.setAfterWidth(80);
        break;
      case 5:
        this.setAfterWidth(100);
        break;
    }
  }

  private setAfterWidth(percentage: number): void {
    const afterWidth = `${percentage}%`;
    document.documentElement.style.setProperty('--after-width', afterWidth);
  }

  updateBackground(game: Game): void {
    this.currentGame = game;
    this.backgroundStyle = `url('../../../assets/banner-hero/games/${this.currentGame.bgImage}')  no-repeat top center / cover`;
  }
}
