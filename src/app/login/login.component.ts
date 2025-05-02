import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AutentificarLoginService } from '../services/autentificar-login.service';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs';



@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public imagemLogo: string = "assets/img/ford.png";
  public imagemFundo: string = "assets/img/mustang.png";
  public titulo: string = "Boas-vindas";
  public formulario!: FormGroup;

  constructor(private fb: FormBuilder, private service: AutentificarLoginService, private router: Router) {}


  ngOnInit() {
    this.inicializarFormulario();
    const saved = localStorage.getItem('formData');
    if (saved) this.formulario.patchValue(JSON.parse(saved));
  
    
    this.formulario.valueChanges
  .pipe(debounceTime(1500)) // Espera 1.5 segundos de inatividade
  .subscribe(() => {
    this.salvarDadosLocais();
  });
  }

  onSubmit(): void {
    if (this.formulario.invalid) return;
  
    this.service.autentificarFormulario(this.formulario.value).subscribe({
      next: (res) => {
        console.log('Autenticado:', res);

        localStorage.setItem('dadosDoUsuario', JSON.stringify({
          nome: this.formulario.value.nome,
          
        }))


        this.router.navigateByUrl('/home');
       
      },
      error: (err) => {
        console.error('Falha no login:', err);
        alert('Credenciais inválidas ou erro de conexão');
      }
    });
  }
 
  
  inicializarFormulario() {

    const dadosSalvos = JSON.parse(localStorage.getItem('formData') || '{}');
  
    this.formulario = new FormGroup({
      nome: new FormControl(dadosSalvos.nome || '', [Validators.required]),
      senha: new FormControl('', [ 
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  salvarDadosLocais() {
    localStorage.setItem('formData', JSON.stringify(this.formulario.value));
  }


  }






