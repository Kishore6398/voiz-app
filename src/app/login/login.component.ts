import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ApiService } from '../api.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
interface TokenObj{
  token:string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  User: any;
  selected_user={username:'',mobile:'',email:'',password:''};
  constructor(private fb: FormBuilder, private apiService:ApiService,private cookieService:CookieService,private router:Router) {
   // this.getlogin();
   }
   
 ngOnInit() {
     this.loginForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       passwordInput: new FormControl(null, Validators.required),       
     });
     const token = this.cookieService.get('usr_token');
      if(token){
        this.router.navigate(['/dashboard']);
}
 }
onSubmit(): void{
  //console.log(this.loginForm.value);
  this.apiService.loginUser({username:this.loginForm.value.mobileInput,password:this.loginForm.value.passwordInput}).subscribe(
  (data: TokenObj) => {
  this.cookieService.set('usr_token',data.token);
  data => this.router.navigate(['/dashboard']);
  this.router.navigate(['/dashboard']);
  },
  error => console.log(error)
  );
  
  }
        

/*getusershere() {
  this.login.getUsers().subscribe(data => (this.User = data));
}
select(id){
  this.login.getUserDetails(id).subscribe(data=>(this.selected_user=data));
}
create(User){
  this.login.createUser(User).subscribe(data=>(this.User=data));
}
update(User)
{
  this.login.UpdateUser(User).subscribe(data=>(this.User[this.User.map(function(x){return x.id;}).indexOf(data.id)]=data));
}

delete(User){
  this.login.deleteUser(User).subscribe(data=>(this.User.splice(this.User.map(function(x){return x.id;}).indexOf(data.id),1),this.selected_user={username:'',mobile:'',email:'',password:''}));
}
}*/
get passwordInput() { return this.loginForm.get('passwordInput'); }

get mobileInput() { return this.loginForm.get('mobileInput'); }

}
