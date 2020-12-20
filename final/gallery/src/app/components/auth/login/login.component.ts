import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup;
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onSubmit() {
    if (!this.form.invalid) {
      const { username, password } = this.form.value;
      const user = this.authService.login(username, password);
      if (user) {
        localStorage.setItem('me', JSON.stringify(user));
        const fav: Favorite = {
          id: 0,
          masterpieces: [],
        };
        localStorage.setItem('favorite', JSON.stringify(fav));
        this.router.navigate(['/gallery/']);
      } else {
        return;
      }
    }
  }
}
