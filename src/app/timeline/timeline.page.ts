import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  nextPage(){
    this.route.navigate(['/timeline-info2']);
  }
}
