import { Component,inject} from '@angular/core';
import { getAuth,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup,OAuthProvider} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
auth=getAuth()
router=inject(Router)
service=inject(AuthService)
google_provider=new GoogleAuthProvider()
apple_provider=new OAuthProvider('apple.com')
async submit(value:{username:string,password:string}){
  await signInWithEmailAndPassword(this.auth,value.username,value.password).then((c)=>{
    this.service.AuthenticateUser(c.user.uid)
    this.router.navigateByUrl('dashboard')
  }).catch((err)=>{
    console.log(err)
  })
}

async GoogleClick(){
  await  signInWithPopup(this.auth,this.google_provider).then((c)=>{
    this.router.navigateByUrl('dashboard')
  }).catch((err)=>{
    console.log(err)
  })
}

}
