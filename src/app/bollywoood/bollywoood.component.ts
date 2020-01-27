import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bollywoood',
  templateUrl: './bollywoood.component.html',
  styleUrls: ['./bollywoood.component.css']
})
export class BollywooodComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  myFunction() {
    var x =  (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }

}
