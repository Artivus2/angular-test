import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../models/IUser';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-profile-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css'
})
export class ProfileDetailComponent implements OnInit {
  route = inject(ActivatedRoute)
  userService = inject(UserService)
  id: any;
  userProfile!: IUser

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    this.getProfile()
  }

  getProfile() {
    this.userService.getUser(this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.userProfile = data
      },
      error: (error) => {
        console.log(error);

      }
    })
  }

}
