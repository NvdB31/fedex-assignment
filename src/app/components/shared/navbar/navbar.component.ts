import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { clearUser } from 'src/app/store/user/user.actions'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  constructor(private store: Store, private router: Router) { }

  handleLogout() {
    this.store.dispatch(clearUser());
    // Redirect to sign up page
    this.router.navigate(['/signup']);
  }

}