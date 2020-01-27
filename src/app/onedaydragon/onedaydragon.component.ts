import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-onedaydragon',
  templateUrl: './onedaydragon.component.html',
  styleUrls: ['./onedaydragon.component.css']
})
export class OnedaydragonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
    });
  }
  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }


}
