import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeader = true;
  title = 'Loginform';
  emailid; 
  formdata;
  constructor( private router: Router) {
    // this.router.events.pipe(
    //     filter(e => e instanceOf NavigationEnd)).subscribe(event => this.modifyHeader(event));
}

  ValidationMassages = {
     'emailid' :{
       'required': 'Email is required.'
     },

  };
  formErrors = {
  'emailid':'',
  };


  ngOnInit() { 
    this.formdata = new FormGroup({ 
       emailid: new FormControl(Validators.required),

       passwd: new FormControl("") 
    }); 
 } 
 modifyHeader(location) {
  console.log(location.url); 
  if (location.url === '/login') {
      this.showHeader = false;
  } else {
      this.showHeader = true;
  }
}
 

 onClickSubmit(data) {

   this.emailid = data.emailid;}

}
