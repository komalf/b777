import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
@Component({
  selector: 'app-cards32-b',
  templateUrl: './cards32-b.component.html',
  styleUrls: ['./cards32-b.component.css']
})
export class Cards32BComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('[data-toggle="popover"]').popover();
      });
  }

}
