import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-info3',
  templateUrl: './timeline-info3.page.html',
  styleUrls: ['./timeline-info3.page.scss'],
})
export class TimelineInfo3Page implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goHomepage() {
    this.route.navigate(['/home']);

  }


  nextPage() {
    this.route.navigate(['/timeline-end']);
  }

}
