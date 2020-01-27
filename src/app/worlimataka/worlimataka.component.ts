import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-worlimataka',
  templateUrl: './worlimataka.component.html',
  styleUrls: ['./worlimataka.component.css']
})
export class WorlimatakaComponent implements OnInit {

  constructor() {  }


  ngOnInit() {

    $(document).ready(function() {  
      $(document).on("click","#thumbnails",function(){
        $(this).css("background","green");
        
        $("#thumbnails").not($(this)).css("background","none");
      });
      });



  }
  myFunction() {
    var x =  (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }




}
