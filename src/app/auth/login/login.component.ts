import {Component, NgZone, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import Swal from "sweetalert2";

declare var gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  public submittedForm = false;
  public loginForm: FormGroup;
  public auth2: any;

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserService,
              private ngZone: NgZone) {
    const remember = localStorage.getItem('email') || '';
    this.loginForm = this.fb.group({
      email: [remember, [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      rememberPassword: [false]
    });
  }

  ngOnInit(): void {
    this.renderButton();
  }

  login() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.userService.login(this.loginForm.value).subscribe((result: any) => {
        if (this.loginForm.get('rememberPassword')?.value) {
          localStorage.setItem('email', this.loginForm.get('email')?.value);
        } else {
          localStorage.removeItem('email');
        }
        this.router.navigate(['/']);
      }, error => {
        Swal.fire('Error', error.error.msg, 'error');
      });
    }
  }

  renderButton() {
    gapi.signin2.render('my-signin2', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
    });
    this.startApp();
  }

  async startApp() {
    await this.userService.googleInit();
    this.auth2 = this.userService.auth2;
    this.attachSignin(document.getElementById('my-signin2'));
  };

  attachSignin(element: any) {
    console.log(element.id);
    this.auth2.attachClickHandler(element, {},
      (googleUser: any) => {
        console.log(googleUser.getAuthResponse().id_token);
        const id_token = googleUser.getAuthResponse().id_token;
        this.userService.loginGoogle(id_token).subscribe(() => {
          this.ngZone.run(() => {
            this.router.navigate(['/']);
          });
        });
      }, (error: any) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

}
