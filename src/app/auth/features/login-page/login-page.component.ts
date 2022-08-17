import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceMock } from 'src/app/apis/auth/auth.service.mock';

interface ILoginFormData {
  email: string | null;
  password: string | null;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  @ViewChild('ngForm') form!: NgForm;
  formGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.email]),
      password: new FormControl('', [
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
    },
    { updateOn: 'blur' }
  );

  constructor(private authService: AuthServiceMock, private router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid) return;
    this.authService
      .login(this.formGroup.value.email!, this.formGroup.value.password!)
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['']);
      });
    alert('login to ....');
  }
}
