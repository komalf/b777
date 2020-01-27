import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TokenService } from '../token.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-passwordmobile',
  templateUrl: './passwordmobile.component.html',
  styleUrls: ['./passwordmobile.component.css']
})
export class PasswordmobileComponent implements OnInit {



  
  constructor(private router: Router,private formBuilder: FormBuilder, private apiService: ApiService,private tokenService:TokenService) { }

  
  get f() { return this.changePasswordForm.controls; }
  changePasswordForm: FormGroup;
  isSubmitted = false;

  
  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      newPwd: ['', Validators.required],
      oldPwd: ['', Validators.required],
      context:['mobile']
    });
  }

  changePassword(data) {
    this.isSubmitted = true;

    if (this.changePasswordForm.invalid) {
      return;
    }
    // this.apiService.changePassword(this.changePasswordForm.value).subscribe(res => console.log(res));
      // const {oldPwd, newPwd} = this.changePasswordForm.value;
      // this.apiService.changePassword({oldPwd, newPwd}).subscribe(() => console.log('Success!'),
      // () => console.log('A problem occurred..'));
      console.log(this.changePasswordForm)
      const { oldPwd, newPwd,context } = data;
      this.apiService.changePassword({ oldPwd, newPwd,context }).subscribe((data) =>
        console.log('Success!', data)
      );
        
    }

  }


