import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { AutentificarLoginService } from '../services/autentificar-login.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;
  imagemLogo = 'assets/img/ford.png';
  imagemFundo = 'assets/img/mustang.png';
  titulo = 'Boas-vindas';

  constructor(
    private fb: FormBuilder,
    private service: AutentificarLoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();

    if (this.temTokenSalvo()) {
      this.router.navigateByUrl('/home');
      return;
    }

    this.formulario.valueChanges
      .pipe(debounceTime(1500))
      .subscribe(() => this.salvarDadosLocais());
  }

  onSubmit(): void {
    if (this.formulario.invalid) return;

    const { rememberMe, ...dadosLogin } = this.formulario.value;

    //this.service.autentificarFormulario() = Escrever a carta e enviar
    this.service.autentificarFormulario(dadosLogin).subscribe({ //Subscribe = "Quando a resposta chegar faça isso"
      next: (usuario) => {       
        console.log('Resposta da API:', usuario);

        if (usuario?.id) {
          this.router.navigateByUrl('/home');
        } else {
          console.error('Usuário inválido');
        }
      },
      error: (err) => {
        console.error('Falha no login:', err);
        alert('Credenciais inválidas ou erro de conexão');
      }
    });
  }

  
  private inicializarFormulario(): void {
    const dadosSalvos = this.obterDadosLocais();

    this.formulario = this.fb.group({
      nome: [dadosSalvos?.nome || '', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  private salvarDadosLocais(): void {
    if (this.isBrowser()) {  //metodo usado para barrar o erro de renderização do SRR do angular aonde não existe o localStore 
      localStorage.setItem('usuarioDados', JSON.stringify(this.formulario.value));
    }
  }

  private obterDadosLocais(): any {
    if (this.isBrowser()) {
      return JSON.parse(localStorage.getItem('usuarioDados') || '{}');
    }
    return {};
  }

  private temTokenSalvo(): boolean {
    return this.isBrowser() && !!localStorage.getItem('auth_token');
  }
  private onRememberMeChange(event: any): void {
  if (!event.target.checked) {
    localStorage.removeItem('usuarioDados');
  }
}
 private isBrowser(): boolean {
  return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
}
}
