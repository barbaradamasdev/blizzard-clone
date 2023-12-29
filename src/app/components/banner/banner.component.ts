import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  isTrailerPlaying: boolean = false;

  startTrailer() {
    this.isTrailerPlaying = true;
  }

  stopTrailer() {
    this.isTrailerPlaying = false;
  }
}
