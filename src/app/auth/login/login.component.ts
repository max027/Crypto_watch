import { Component,inject} from '@angular/core';
import { getAuth,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
auth=getAuth()
router=inject(Router)
provider=new GoogleAuthProvider()

async submit(value:{username:string,password:string}){
  await signInWithEmailAndPassword(this.auth,value.username,value.password).then((c)=>{
    this.router.navigateByUrl('dashboard')
  }).catch((err)=>{
    console.log(err)
  })
}

async GoogleClick(){
  await  signInWithPopup(this.auth,this.provider).then((c)=>{
    this.router.navigateByUrl('dashboard')
  }).catch((err)=>{
    console.log(err)
  })
}
}
