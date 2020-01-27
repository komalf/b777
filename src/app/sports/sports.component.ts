import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  TournamentList: [];
  sptid: any
  context: ['mobile']
  data: any;
  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.sptid = params.sptid;
    })
  }

  ngOnInit() {
    this.gettournamentList();
  }

  gettournamentList() {
    this.navigationService.gettournamentList(this.sptid).subscribe(data => {
      this.TournamentList=data.data;
      console.log(this.TournamentList);
    })

  }

}
