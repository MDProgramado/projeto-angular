import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AutentificarLoginService } from '../services/autentificar-login.service';
import { Usuario } from '../../../models/usuario.model';
import { Router } from '@angular/router';


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
  

  constructor(private fb: FormBuilder, private htpp: HttpClient, private service: AutentificarLoginService, private router: Router) {}


  ngOnInit() {
    this.enviarForm();
    this.onSubmit();
    this.inicializarFormulario();
    this.enviarForm();
  }
  
   onSubmit(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    const dados: Usuario = this.formulario.value;
    this.service.autentificarFormulario(dados)
      .subscribe(() => this.router.navigate(['home']));
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
