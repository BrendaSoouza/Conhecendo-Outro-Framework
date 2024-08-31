import { Component } from '@angular/core';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, LivroListaComponent, LivroDadosComponent, RouterOutlet],
})
export class AppComponent {
  title = 'livros-angular2';
}


