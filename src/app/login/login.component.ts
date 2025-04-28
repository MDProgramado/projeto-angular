import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { Usuario } from '../../../models/usuario.model';
import { min } from 'rxjs';
import { RouterLink } from '@angular/router';
import { AutentificarLoginService } from '../services/autentificar-login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public imagemLogo: string = "assets/img/ford.png";
   public imagemFundo: string = "assets/img/mustang.png";
   public titulo: string = "Boas-vindas";
    public formulario!: FormGroup;

  constructor(private autentificarLogin: AutentificarLoginService) { }
  ngOnInit() {
    // this.inicializarFormulario();
    this.initForm();
    this.enviarForm();
  
  }

  initForm() {
    this.formulario = this.formBuilder.group({
      id: new FormControl(0),
      nome: [''],
      email: [''],
      senha: [''],
      
    })
  }
  
  async enviar() {
    const {
      email,
      senha
    }
  }
  // inicializarFormulario() {
  //   this.formulario = new FormGroup({
  //     email: new FormControl('', [Validators.required, Validators.email]),
  //     senha: new FormControl('', [Validators.required, Validators.minLength(8)])
  //   });
  // }

  enviarForm() {
    this.formulario.markAllAsTouched();
    if (this.formulario.invalid) {
      return;
    }
  
    console.log(this.formulario.value);
  }
}


