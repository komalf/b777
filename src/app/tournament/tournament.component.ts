import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  MatchList =[];
  mid: any
  id:any
  sptid:any
  context: ['mobile']
  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {
    this.route.params.subscribe(params => {
      console.log(params); 
      this.mid=params.mid; 
      this.sptid=params.sptid
     
    })
   }

  ngOnInit() {
    this.getmatchList();
  }
  getmatchList() {
    this.navigationService.getmatchList(this.sptid,this.mid).subscribe(data => {
      this.MatchList=data.data;
      console.log(this.MatchList);
    })

  }

}
