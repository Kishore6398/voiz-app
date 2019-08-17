import { Component, OnInit,OnDestroy} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ApiService } from '../api.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import { getDefaultService } from 'selenium-webdriver/chrome';
import { DataService } from '../data.service';
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
  username:any;
  uname:any;
  firstname:any;
  uemail:any;
  login:[];


  User: any;
  selected_user={username:'',mobile:'',email:'',password:''};
  constructor(private Cookie:CookieService,private fb: FormBuilder, private apiService:ApiService,private cookieService:CookieService,private router:Router,private data:DataService) {
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
this.data.uname=this.uname;
  this.data.firstname=this.firstname;
  this.data.uemail=this.uemail;
 }
 ngOnDestroy(){
  this.data.uname=this.uname;
  this.data.firstname=this.firstname;
 this.data.uemail=this.uemail;
  //this.data.uname=this.User.username;
   //this.data.firstname=this.User.first_name;
   //console.log(this.data.firstname)
   }
onSubmit(): void{
  //console.log(this.loginForm.value);
  this.apiService.loginUser({username:this.loginForm.value.mobileInput,password:this.loginForm.value.passwordInput}).subscribe(
  (data: TokenObj) => {
  this.cookieService.set('usr_token',data.token);
    location.href="/dashboard"
},
  error => console.log(error)
  );
  this.getusertest();
  
  console.log(this.loginForm.value.mobileInput);
  
  }    
  getusertest(){
    this.apiService.getUser(this.loginForm.value.mobileInput).subscribe(data => {
      this.User = data;
      console.log(this.User.first_name);
      this.uname=this.User.username;
      this.firstname=this.User.first_name;
      this.uemail=this.User.email;
      this.Cookie.set('uname',this.User.username);
      this.Cookie.set('firstname',this.User.first_name);
      this.Cookie.set('uemail',this.User.email);


    },
    error => alert("User does not exists")

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
