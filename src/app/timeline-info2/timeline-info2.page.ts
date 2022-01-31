import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-info2',
  templateUrl: './timeline-info2.page.html',
  styleUrls: ['./timeline-info2.page.scss'],
})
export class TimelineInfo2Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goHomepage() {
    this.route.navigate(['/home']);

  }


  nextPage() {
    this.route.navigate(['/timeline-info3']);
  }


}
