import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardGame } from '../../models/CardGame.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() games: CardGame[] | undefined;

}
