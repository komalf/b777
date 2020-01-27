import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  mrid:any
  MarketList= [];
  constructor(private route: ActivatedRoute, private navigationService: NavigationService) {
    this.route.params.subscribe(params => {
      console.log(params);
      this.mrid = params.mrid;
    })
   }

  ngOnInit() {
    this.getmarketList();
  }

  getmarketList(){
    this.navigationService.getmarketList(this.mrid).subscribe(data => {
      this.MarketList=data.data;
      console.log(this.MarketList);
    })
    
  }

}
