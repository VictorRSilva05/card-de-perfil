import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('card-de-perfil');

  foto = 'https://static.wikitide.net/needforspeedwiki/thumb/7/7a/Ryan_Cooper.jpg/300px-Ryan_Cooper.jpg'
  nome = 'Victor';
  idade = 21;
  profissao = 'Desenvolvedor trainee'
  status = true
}
