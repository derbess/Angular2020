import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { User } from '../../../models/auth.models';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  users: User[] = [];
  ngOnInit(): void {
    this.apiService.getusers().subscribe((data) => {
      this.users = data;
    });
  }

  onUserClick(user: User) {
    const { id } = user;
    this.router.navigate(['/alboms'], { queryParams: { userId: id } });
  }
}
