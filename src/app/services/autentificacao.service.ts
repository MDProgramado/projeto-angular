import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
