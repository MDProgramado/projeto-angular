import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  imagemLogo: string = "assets/img/ford.png";
  imagemFundo: string = "assets/img/mustang.png";
  titulo: string = "Boas-vindas";
  usuario: Usuario = {
    id: '',
    nome: '',
    email: '',
    senha: ''
  };

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required,Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), 
      Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]+$')])
  });


  

  butao: string = "Entrar";
}
