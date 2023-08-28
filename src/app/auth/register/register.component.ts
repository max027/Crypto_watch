import { Component,inject } from '@angular/core';
import { getAuth ,createUserWithEmailAndPassword} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  auth=getAuth()
  router=inject(Router)
  async submit(value:{username:string,password:string}){
   await createUserWithEmailAndPassword(this.auth,value.username,value.password).then((val)=>{
    value.password=''
    value.username=''
    this.router.navigateByUrl('/register/login')
   }).catch((err)=>{
    console.log(err);
   }) 
  
  
  }

}
