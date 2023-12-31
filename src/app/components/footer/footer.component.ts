import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  iconOs = '../../../assets/menu-burguer.svg';
  title?: string;

  ngOnInit() {
    const userAgent = window.navigator.userAgent;

    if (userAgent.includes('Windows')) {
      this.updateOS('Windows');
    } else if (userAgent.includes('MacOS')) {
      this.updateOS('MacOS');
    } else if (userAgent.includes('Linux')) {
      this.updateOS('Linux');
    } else {
      this.updateOS('agora');
    }
  }

  updateOS(sistemaOperacional:string): void {
    if (sistemaOperacional === 'agora') {
      this.title = sistemaOperacional;
    } else {
      this.iconOs = `../../../assets/os/${sistemaOperacional}.svg`;
      this.title = 'para o ' + sistemaOperacional;
    }
  }

}
