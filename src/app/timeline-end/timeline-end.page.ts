import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timeline-end',
  templateUrl: './timeline-end.page.html',
  styleUrls: ['./timeline-end.page.scss'],
})
export class TimelineEndPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  // nextPage(){
  //   this.route.navigate(['/timeline-info2']);
  // }
}
