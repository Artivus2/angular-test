import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject, Inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { UserRresponse } from '../../pages/auth/user.interface';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent implements OnInit {
  authService = inject(AuthService)
  cartService = inject(CartService)
  router = inject(Router)

  platformId!: Object

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.platformId = platformId
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token')!
      const user: UserRresponse = jwtDecode(token)
      this.authService.setCurrentUser(user)
    }
  }

  logout() {
    this.authService.logout()
  }

  getProfile(id: number) {
    // console.log(id);
    this.router.navigateByUrl('/profile/' + id)
  }

}
