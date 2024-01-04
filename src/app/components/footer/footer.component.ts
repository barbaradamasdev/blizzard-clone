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
      this.updateOS('para o Windows');
    } else if (userAgent.includes('MacOS')) {
      this.updateOS('para o MacOS');
    } else if (userAgent.includes('Linux')) {
      this.updateOS('para o Linux');
    } else {
      this.updateOS('agora');
    }
  }

  updateOS(sistemaOperacional:string): void {
    this.iconOs = `../../../assets/os/${sistemaOperacional}.svg`;
    this.title = sistemaOperacional;
  }

}
