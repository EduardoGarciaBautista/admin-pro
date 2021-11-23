import {Injectable, NgZone} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterFormInterface} from '../interfaces/register-form.interface';
import {environment} from '../../environments/environment';
import {LoginFormInterface} from '../interfaces/login-form.interface';
import {catchError, map, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Router} from '@angular/router';

declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly USERS_SERVICE = 'users';
  private readonly LOGIN_SERVICE = 'login';
  private readonly LOGIN_GOOGLE = 'login/google';
  private readonly RENEW_TOKEN = 'login/renew';
  public auth2: any;

  constructor(private http: HttpClient,
              private router: Router,
              private ngzone: NgZone) {
    this.googleInit();
  }

  validateToken() {
    const token = localStorage.getItem('token') || '';
    const url = `${environment.HOST_URL}${this.RENEW_TOKEN}`;
    return this.http.get(url, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      }),
      map(response => true),
      catchError(() => {
        return of(false)
      })
    );
  }

  public createUser(formData: RegisterFormInterface) {
    const url = `${environment.HOST_URL}${this.USERS_SERVICE}`;
    return this.http.post(url, formData).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.jwt);
      })
    );
  }

  public login(formData: LoginFormInterface) {
    const url = `${environment.HOST_URL}${this.LOGIN_SERVICE}`;
    return this.http.post(url, formData).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.jwt);
      })
    );
  }

  public loginGoogle(token: string) {
    const url = `${environment.HOST_URL}${this.LOGIN_GOOGLE}`;
    return this.http.post(url, {token}).pipe(
      tap((response: any) => {
        localStorage.setItem('token', response.token);
      })
    );
  }

  public logOut() {
    localStorage.removeItem('token');
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then( () => {
      this.ngzone.run(() => {
        this.router.navigate(['/login']);
      });
    });
  }

  googleInit() {
    return new Promise(resolve => {
      gapi.load('auth2', () => {
        this.auth2 = gapi.auth2.init({
          client_id: '953614352775-9vcf5q4n8pflcuk2me4hmjgcl9lv0imi.apps.googleusercontent.com',
          cookiepolicy: 'single_host_origin',
        });
        resolve(true);
      });
    });
  }
}
