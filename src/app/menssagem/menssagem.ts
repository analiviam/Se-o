import { Component } from '@angular/core';
import { Menssagem } from '../entidadeMenssagem/entidadeMenssagem';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-menssagem',
  templateUrl: 'menssagem.html',
})
export class MenssagemComponent {
   menssagem: Menssagem = new Menssagem();

  constructor(private banco: AngularFireDatabase) {}

  salvar(){
   this.banco.list('menssagem').push(this.menssagem);
   this.menssagem = new Menssagem();
  }
}
