import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [ApiService]
})
export class SignupComponent implements OnInit {
  login = [];
  logindetails;
  constructor(private fb: FormBuilder, private apiService: ApiService,private router:Router,private toast:ToastrService) {
    this.logindetails = { id: -1, username: '', first_name: '', email: '', password: '' };//1
    this.getlogin();
  }
  registerForm: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
      nameInput: new FormControl(null, Validators.required),
      emailInput: new FormControl(null, [Validators.required, Validators.email]),
      mobileInput: new FormControl(null, Validators.required),
      passwordInput: new FormControl(null, [Validators.required,Validators.minLength(5)]),
      repasswordInput: new FormControl(null, Validators.required),
    });
    console.log(this.registerForm);
    setTimeout(() => this.toast);
  }
  get nameInput() { return this.registerForm.get('nameInput'); }
  get emailInput() { return this.registerForm.get('emailInput'); }
  get mobileInput() { return this.registerForm.get('mobileInput'); }
  get passwordInput() { return this.registerForm.get('passwordInput'); }
  get repasswordInput() { return this.registerForm.get('repasswordInput') }
  getlogin() {
    this.apiService.getlogin().subscribe(data => (this.login = data));
  }
  onSubmit(): void{
    console.log(this.registerForm.value);
    this.apiService.registerUser({username:this.registerForm.value.mobileInput,email:this.registerForm.value.emailInput,password:this.registerForm.value.passwordInput,first_name:this.registerForm.value.nameInput}).subscribe(
    data=>{
    console.log(data);
    this.toast.success("Your Account created successfully!!!, You'll be automatically redirected.","Hurray!",{
      easing: 'ease-in',
      timeOut: 3000,
      progressAnimation:'decreasing',
      progressBar: true,
      tapToDismiss:true,
    });
    setTimeout(() => {
      this.router.navigateByUrl('/login');
  }, 6000);
    this.router.navigate(['/login']);
    },
    error=>{
      if(error.error.email)
         {
            this.toast.error(error.error.email,"Invalid Email",{
              easing: 'ease-in',
              timeOut: 6000,
              progressAnimation:'decreasing',
              progressBar: true,
              tapToDismiss:true,
            });
         }   if(error.error.username)
         {
            this.toast.error(error.error.username,"Invalid Username",{
              easing: 'ease-in',
              timeOut: 6000,
              progressAnimation:'decreasing',
              progressBar: true,
              tapToDismiss:true,
            });
         }
         if(error.error.phone)
         {
            this.toast.error(error.error.phone,"Invalid Mobile",{
              timeOut: 6000,
              easing: 'ease-in',
              progressAnimation:'decreasing',
              progressBar: true,
              tapToDismiss:true,
            });
         }
         setTimeout(() => {
          this.router.navigateByUrl('/signup');
      }, 6000);
    }
    );
    }
}
