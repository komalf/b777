import { Component, OnInit } from '@angular/core';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-bethistory',
  templateUrl: './bethistory.component.html',
  styleUrls: ['./bethistory.component.css']
})
export class BethistoryComponent implements OnInit {
  dropdown;
  constructor(private router: Router) { }

  ngOnInit() {

    
    this.dropdown = document.getElementsByClassName("dropdown-btn");

    for (let i = 0; i < this.dropdown.length; i++) {
      this.dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          dropdownContent.style.display = "block";
        }
      });
    }
  }

}
