
import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginAutomaticoService {

  private tokenValido(token: string) {
    return true
  }
  constructor(private router: Router) {   }

autoLogin():void {

  const token = localStorage.getItem('authToken');

  if(token && this.tokenValido(token)) {
    this.router.navigateByUrl('/home')

  }
}


}
