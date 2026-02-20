import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = !!localStorage.getItem('user'); // or check your auth state
    if (!isLoggedIn) {
      this.router.navigate(['/signin']); // redirect to sign-in
      return false;
    }
    return true;
  }
}