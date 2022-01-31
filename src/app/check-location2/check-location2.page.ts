import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-location2',
  templateUrl: './check-location2.page.html',
  styleUrls: ['./check-location2.page.scss'],
})
export class CheckLocation2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextPage(){
    this.route.navigate(['/check-location3']);
  }
}
