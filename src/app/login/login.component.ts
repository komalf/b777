import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: any;
  SportsList = [];

  constructor( private router: Router, private formBuilder: FormBuilder, private apiService: ApiService,private tokenService:TokenService,private navigationService: NavigationService) { }
  // loginForm: FormGroup;
  // isSubmitted  =  false;
  // get username() { return this.loginForm.get('username'); }
  // get password() { return this.loginForm.get('pwd'); 

  get f() { return this.loginForm.controls; }
  loginForm: FormGroup;
  isSubmitted = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      pwd: ['', Validators.required],
      context:['mobile']
    });
    // this.apiService.logout();
    // if(localStorage.getItem('token') !=null)
    // this.router.navigate(['/mobileview']);
  }

  login()  {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.apiService.login(this.loginForm.value).subscribe((data) => {
      console.log("login result",data)
      
      if (data.description.status=='Success') {
        this.tokenService.setToken(data.response.AuthToken);
        this.router.navigate(['/mobileview']);
  }
  else{
      // console.log('fail' );
      // alert('incorrect username or password');
      // 
      document.getElementById("errortext").innerHTML = "Invalid username.";
      var errorblock = document.getElementById("errorblock");
      errorblock.style.visibility = "visible";
      errorblock.style.height = "46px";
      errorblock.style.background = "#f8d7da";
      errorblock.style.color = "#721c24";
      errorblock.style.padding = ".75rem 1.25rem";
      errorblock.style.marginBottom= "1rem";
      errorblock.style.border = "1px solid transparent";
      errorblock.style.borderRadius = ".25rem";
     
    }
    })


  }

  



  get formControls() { return this.loginForm.controls; }

  // onSubmit() {
  //   console.log(this.loginForm.value);
  //   this.isSubmitted = true;
  //   if (this.loginForm.invalid) {
  //     return;
  //   }
  //   this.authService.login(this.loginForm.value);
  //   this.router.navigateByUrl('/admin');
  // }


  // logout() {
  //   this.login.next(false);
  //   this.router.navigate(['/login']);
  // }
  // onLogout() {
  //   this.token = null;
  //   localStorage.removeItem('eq_user');
  //   localStorage.clear();
  //   this.apiService.logout().subscribe( s => {
  //       this.router.navigate(['/login']);
  //  });
  // }



}


