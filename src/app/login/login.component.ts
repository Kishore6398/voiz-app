import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Errors, UserService } from '../core';
interface TokenObj{
  token: string;
  user_id:any;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ApiService,LoginService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  User: any;
  errors: any;
  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;
  selected_user={username:'',mobile:'',email:'',password:''};
  constructor(
    private fb: FormBuilder, 
    private apiService:ApiService,
    private Login:LoginService,
    private Cookie: CookieService,
    private router: Router,
    private userService: UserService) {
   // this.getlogin();
   }
   
 ngOnInit() {
     this.loginForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       passwordInput: new FormControl(null, Validators.required),       
     });
     const token=this.Cookie.get('usr_token');
     if(token){
       this.router.navigate(['/dashboard']);
     } else {
       this.router.navigate(['/login']);
     }
}

onSubmit(): void {
  console.log(this.loginForm.value);
  this.Login.LoginUser(this.loginForm.value).subscribe(
    (data: TokenObj) =>{
      this.Cookie.set('usr_token', data.token);
      console.log('user authenticated successfully');
<<<<<<< HEAD
      this.User=data.user_id;
      console.log(this.User)
      this.router.navigate(['/dashboard']);
    }
  );
}
// submitForm() {
//   this.errors = {errors: {}};

//   const credentials = this.loginForm.value;
//   this.userService
//   .attemptAuth(this.authType, credentials)
//   .subscribe(
//     data => this.router.navigateByUrl('/'),
//     err => {
//       this.errors = err;
//     }
//   );
// }
=======
      this.router.navigate(['/dashboard']);
    }
  );
}
submitForm() {
  this.errors = {errors: {}};

  const credentials = this.loginForm.value;
  this.userService
  .attemptAuth(this.authType, credentials)
  .subscribe(
    data => this.router.navigateByUrl('/dashboard'),
    err => {
      this.errors = err;
      console.log(err)
    }
  );
}
  LoginUser(){
    console.log("login user");
    const credentials = this.loginForm.value;
    this.Login.login(credentials)
    .then((data)=>{
      console.log(data);
      if(data.status==200){
        if(data.json()['status']=='success'){
          //this.cookieservice.put('token', data.json()['token']);
          console.log("successfully validated");
        }else{
          console.log('Invalid Credentials');
        }
      }
      else{
        console.log("Some error occured")
      }
    })
    
  }
>>>>>>> 60cf338faad14c8c458fe537c2c98991c858a3d8
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
