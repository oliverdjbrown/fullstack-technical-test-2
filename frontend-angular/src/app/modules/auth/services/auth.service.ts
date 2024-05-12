import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SignIn } from '../interfaces/signing.interface';
import { environment } from '../../../../environments/environment';
import { User } from '../../../interfaces/user.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);

  singIn(signInForm: SignIn): Observable<User> {
    return this.http.post<User>(
      `${environment.backendUrl}/auth/login`,
      signInForm
    );
  }

  saveDataToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  navToPanel(): void {
    this.router.navigate(['/admin']);
  }
}
