import { Routes } from '@angular/router';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroDadosComponent } from './livro-dados/livro-dados.component';

export const routes: Routes = [
  { path: 'livro-lista', component: LivroListaComponent },
  { path: 'livro-dados', component: LivroDadosComponent },
  { path: '', redirectTo: '/livro-lista', pathMatch: 'full' }
];
