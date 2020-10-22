import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { Token } from '../../../models/auth.models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  form: FormGroup;

  ngOnInit(): void {
    this.onForm();
  }
  onForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: this.formBuilder.group({
        street: ['', [Validators.required]],
        suite: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required]],
        geo: this.formBuilder.group({
          lat: [''],
          lng: [''],
        }),
      }),
      phone: ['', Validators.required],
      website: ['', Validators.required],
      company: this.formBuilder.group({
        name: ['', Validators.required],
        catchPhrase: ['', Validators.required],
        bs: ['', Validators.required],
      }),
    });
  }
  onSubmit() {
    if (this.form.invalid) {
    console.log("not registred");

      return;
    }
    console.log("registred");
    const { username, password } = this.form.value;
    this.authService.signup(this.form.value).subscribe(() => {
      this.authService.login({username, password}).subscribe((data: Token) => {
        if (data && data.access_token) {
          localStorage.setItem('token', JSON.stringify(data));
          this.router.navigate(['/posts']);
        }
      });
    });
  }

}

