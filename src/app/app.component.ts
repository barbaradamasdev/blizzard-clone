import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "./components/hero/hero.component";
import { MainComponent } from "./components/main/main.component";
import { DownloadComponent } from "./components/download/download.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeroComponent, MainComponent, DownloadComponent]
})
export class AppComponent {
  title = 'blizzard-clone';
}
