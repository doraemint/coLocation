import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-location3',
  templateUrl: './check-location3.page.html',
  styleUrls: ['./check-location3.page.scss'],
})
export class CheckLocation3Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

goHomepage(){
this.route.navigate(['/home']);

}


}
