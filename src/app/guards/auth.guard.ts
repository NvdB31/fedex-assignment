import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { getUser } from '../store/user/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private store: Store, private router: Router) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(getUser),
            map(user => {
                if (!user) {
                    this.router.navigate(['/signup']);
                    return false;
                }
                return true;
            }),
            take(1)
        );
    }
}