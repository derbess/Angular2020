import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Favorite } from 'src/app/models/favorite';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form: FormGroup;
  ngOnInit(): void {
    // const now = new Date();
    // const monthAgo = new Date().setMonth(now.getMonth() - 1).toString();

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      // birthday: [monthAgo, Validators.required],
      isAdmin: [false, Validators.required],
      email: ['', Validators.required],
    });
  }
  onSubmit() {
    if (this.form.invalid) {
      return;
    }
    this.authService.register(this.form.value);
    const { username, password } = this.form.value;
    const user = this.authService.login( username, password );
    if (user) {
      localStorage.setItem('me', JSON.stringify(user));
      const favorite: Favorite = {
        id: 0,
        masterpieces: []
      };
      localStorage.setItem('favorite', JSON.stringify(favorite));
      this.router.navigate(['/gallery']);
    } else {
      return;
    }
  }
}
