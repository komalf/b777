import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';
@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {
  SportsList=[];
  TournamentList:[];
  Inplay:[];
  context: ['mobile'];
  constructor(private router: Router, private navigationService: NavigationService) { }
  ngOnInit() {
    this.getsportsList();
  }


  getsportsList() {
    this.navigationService.getsportsList().subscribe((data) => {
      console.log(data);
      this.SportsList = data.data;
      console.log(this.SportsList);
    },
    err => {
      console.log(err);
      if(err.status==401){
      }
    })
    
  }
  getInplay() {}

  
}
