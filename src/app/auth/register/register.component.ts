import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import Swal from 'sweetalert2'
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  public submittedForm = false;

  public registerForm: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.registerForm = this.fb.group({
      name: ['Eduardo Front', [Validators.required, Validators.minLength(3)]],
      email: ['edua@gmail.com', [Validators.required, Validators.email]],
      password: ['1234', [Validators.required]],
      confirmPassword: ['1234', [Validators.required]],
      terms: [true, [Validators.required]]
    }, {
      validators: [this.validatePasswords('password', 'confirmPassword')]
    });
  }

  ngOnInit(): void {
  }

  public createUser(): void {
    this.submittedForm = true;
    if (this.registerForm.valid) {
      this.userService.createUser(this.registerForm.value).subscribe((response: any) => {
        localStorage.setItem('token', response.jwt);
        this.router.navigateByUrl('/dashboard');
      }, err => {
        Swal.fire('Error', err.error.msg, 'error');
      });
    }
  }

  public validateField(field: string): boolean {
    const fieldForm = this.registerForm.get(field);
    return !!fieldForm && !fieldForm.valid && this.submittedForm;
  }

  get verifyPasswords() {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('password')?.value;
    return password !== confirmPassword;
  }

  public validatePasswords(password: string, cPassword: string) {
   return (formGroup: FormGroup) => {
     const pwd = formGroup.get(password);
     const cPwd = formGroup.get(cPassword);
     if (pwd?.value === cPwd?.value) {
       pwd?.setErrors(null);
       cPwd?.setErrors(null);
     } else {
       pwd?.setErrors({notEqual: true});
       cPwd?.setErrors({notEqual: true});
     }
   }
  }
}
