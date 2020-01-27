import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-newlaunch',
  templateUrl: './newlaunch.component.html',
  styleUrls: ['./newlaunch.component.css']
})
export class NewlaunchComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  
    $(document).ready(function(){
      $('[data-toggle="popover"]').popover();   
  });

  }
  myFunction() {
    var x =  (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }

}
