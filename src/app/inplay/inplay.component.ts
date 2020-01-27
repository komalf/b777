import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inplay',
  templateUrl: './inplay.component.html',
  styleUrls: ['./inplay.component.css']
})
export class InplayComponent implements OnInit {
  Inplay=[]; 
  context: ['mobile'];
  constructor(private router: Router, private navigationService: NavigationService) { }

  ngOnInit() {
    this.getInplay();
  }
  getInplay() {
    this.navigationService.getInplay().subscribe((data) => {
      console.log(data);
      this.Inplay = data.data;
      console.log(this.Inplay);
    },
    err => {
      console.log(err);
      if(err.status==401){
      }
    }) 
  }

}
