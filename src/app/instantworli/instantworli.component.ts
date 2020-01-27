import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instantworli',
  templateUrl: './instantworli.component.html',
  styleUrls: ['./instantworli.component.css']
})
export class InstantworliComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  
  
  }
  myFunction() {
    var x =  (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }

}
