import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLoginOpen = false;
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onCloseClick(): void {
    this.closeModal.emit();
  }
}
