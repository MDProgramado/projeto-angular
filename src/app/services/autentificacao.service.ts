import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutentificacaoService {

  constructor(private router: Router) { }

  logout(): void {
   
    sessionStorage.clear();
    localStorage.clear();

    
    this.router.navigate(['/login']);
  }
}
