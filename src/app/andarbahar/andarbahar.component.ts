import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-andarbahar',
  templateUrl: './andarbahar.component.html',
  styleUrls: ['./andarbahar.component.css']
})
export class AndarbaharComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function () {
      $(document).on("click", "#patti_img img", function () {
        $(this).css("border", "3px solid green");

        $("#patti_img img").not($(this)).css("border", "none");
      });
    });

  }

  myFunction() {
    var x =  (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }

}
