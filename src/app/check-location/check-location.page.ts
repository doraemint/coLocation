import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-location',
  templateUrl: './check-location.page.html',
  styleUrls: ['./check-location.page.scss'],
})
export class CheckLocationPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goHomepage() {
    this.route.navigate(['/home']);

  }


  nextPage() {
    this.route.navigate(['/check-location2']);
  }
}
