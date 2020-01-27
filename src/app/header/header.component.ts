import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService,private tokenService:TokenService) { }

  ngOnInit() {
  }

  onLogout() {
    this.apiService.Logout().subscribe(data => {
      console.log(data)
      this.tokenService.removeToken();
    }, err => {
      console.log(err);
      if(err.status==401){
        this.tokenService.removeToken();
      }
    })
  }


}
