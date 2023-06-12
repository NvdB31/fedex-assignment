import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../store/user/user.model';
import { getUser } from '../../store/user/user.selectors'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private store: Store) { }
  user$!: Observable<User | null>;

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUser));
  }
}
