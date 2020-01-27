import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})


export class AccountComponent implements OnInit {

  dropdown;
  constructor(private router: Router) {


  }

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
// export class DemoDatePickerCustomFormatComponent {
//   currentDate = new Date();

//   dropdown;

//   form = new FormGroup({
//     dateYMD: new FormControl(new Date()),
//     dateFull: new FormControl(new Date()),
//     dateMDY: new FormControl(new Date()),
//     dateRange: new FormControl([
//       new Date(),
//       new Date(this.currentDate.setDate(this.currentDate.getDate() + 7))
//     ])
//   });






// }
