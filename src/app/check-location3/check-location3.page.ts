import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-location3',
  templateUrl: './check-location3.page.html',
  styleUrls: ['./check-location3.page.scss'],
})
export class CheckLocation3Page implements OnInit {

  getValueAddress;
  constructor(private route: Router, private router: ActivatedRoute) {
    const getValue = this.router.snapshot.paramMap.get("place")
    console.log('getValue', getValue);
    this.getValueAddress =  JSON.parse(getValue);
    console.log('a', this.getValueAddress);
  }

  ngOnInit() {
  }

goHomepage(){
this.route.navigate(['/home']);

}


}
