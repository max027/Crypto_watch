import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
export const authGuard: CanActivateFn = (route, state) => {
 const service:AuthService=inject(AuthService)
 const router:Router=inject(Router)
 if(service.isAuthenticated()){
   return true
 }
 router.navigateByUrl('/')
 return false
};
