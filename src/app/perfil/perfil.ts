import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  @Input() foto: string = '';
  @Input() nome: string = '';
  @Input() idade: number = 0
  @Input() profissao: string = '';
  @Input() status: boolean = true;
}
