import { Component } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Usuario } from '../entidadeUsuario/entidadeUsuario';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario: Usuario = new Usuario();

  constructor(private router: Router, private banco: AngularFireAuth) {}

  logar(){
    this.banco.auth.signInWithEmailAndPassword( this.usuario.email, this.usuario.senha).then(
      () => { this.router.navigate(['filtroaluno']); }
     ).catch( (erro) => console.log(erro) );
  }
  logout(){
    this.banco.auth.signOut();
    this.router.navigate(['/'])
  }

  
}
