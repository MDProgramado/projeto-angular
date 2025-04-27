import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { min } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  imagemLogo: string = "assets/img/ford.png";
  imagemFundo: string = "assets/img/mustang.png";
  titulo: string = "Boas-vindas";
  formulario!: FormGroup;

  ngOnInit() {
    this.inicializarFormulario();
    this.enviarForm();
  }
  
  inicializarFormulario() {
    this.formulario = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  enviarForm() {
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) {
      return;
    }
  
    console.log(this.formulario.value);
  }
}


