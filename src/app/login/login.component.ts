import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { ApiService } from '../api.service';

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
  constructor(private fb: FormBuilder, private apiService:ApiService) {
    this.getlogin();
   }
   
 ngOnInit() {
     this.loginForm = new FormGroup({
       mobileInput: new FormControl(null,Validators.required),
       passwordInput: new FormControl(null, Validators.required),       
     });
        
}

getusershere() {
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
}
get passwordInput() { return this.loginForm.get('passwordInput'); }

get mobileInput() { return this.loginForm.get('mobileInput'); }


}
