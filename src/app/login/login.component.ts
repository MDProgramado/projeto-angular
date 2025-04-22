import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  imagemLogo: string = "assets/img/ford.png";
  imagemFundo: string = "assets/img/mustang.png";
  titulo: string = "Boas-vindas";
  login: string = "email";
  senha: string = "senha";
  butao: string = "Entrar";
  
}
