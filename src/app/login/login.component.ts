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
  

  constructor(private fb: FormBuilder, private service: AutentificarLoginService, private router: Router) {}


  ngOnInit() {
    this.inicializarFormulario();
  }
  
  onSubmit(): void {
    if (this.formulario.invalid) return;
  
    this.service.autentificarFormulario(this.formulario.value).subscribe({
      next: (res) => {
        console.log('Autenticado:', res);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('Falha no login:', err);
        alert('Credenciais inválidas ou erro de conexão');
      }
    });
  }
  
  
  inicializarFormulario() {
    this.formulario = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      senha: new FormControl('', [
        Validators.required, Validators.minLength(6) 
    ])
    });
  }

}
