import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-mobileview',
  templateUrl: './mobileview.component.html',
  styleUrls: ['./mobileview.component.css']
})
export class MobileviewComponent implements OnInit {
  TournamentList:{};
  Inplay:{};
  context:['mobile']
  constructor( private router: Router,private navigationService: NavigationService) { }

  ngOnInit() {
  }

}
