import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';
import { Aluno } from '../entidadeAluno/entidadeAluno';
import { Form } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-filtroaluno',
  templateUrl: 'filtroaluno.html',

}) // dá uns ctl z q eu vou mexer nuns treco
export class Filtroaluno {
  listaAluno: Observable<Aluno[]>;
  listaFiltro: Aluno[];
  alunox: any;
  filtro = {};
  valor: string;
  aluno: Aluno = new Aluno();

  constructor(private banco: AngularFireDatabase) {
    this.listaAluno = this.banco.list<Aluno>('aluno').snapshotChanges().pipe(map
    (lista => lista.map(linha => ({ key: linha.payload.key, ... linha.payload.val()}))));

  }
  ngOnInit(){
    this.listaAluno.subscribe(aluno => { this.alunox = aluno;
    this.listaFiltro = _.filter(this.alunox, _.conforms(this.filtro));
    })
  }

  filtrar(){
    this.filtro['nomealuno'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.alunox, _.conforms(this.filtro));
  }
}
