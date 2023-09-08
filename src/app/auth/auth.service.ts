import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
Encrypt(id:string){

}
AuthenticateUser(uid:string){
sessionStorage.setItem("id",uid)

}
isAuthenticated(){
  if(sessionStorage.getItem("id")){
    return true
  }
  return false
}
  constructor() { }
}
