import { Component } from '@angular/core';
import { getAuth,signInWithEmailAndPassword } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  auth=getAuth()
submit(value:{username:string,password:string}){
console.log(value);

}
}
