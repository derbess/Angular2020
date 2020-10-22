import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Token } from '../../../models/auth.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const username = this.form.get('username').value.trim();
    const password = this.form.get('password').value.trim();

    this.authService.login({ username, password }).subscribe((data: Token) => {
      if (data.access_token) {
        console.log("login")
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/posts']);
      }
    });
  }
}
