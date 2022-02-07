import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import firebase from 'firebase';

@Component({
  selector: 'app-check-location2',
  templateUrl: './check-location2.page.html',
  styleUrls: ['./check-location2.page.scss'],
})
export class CheckLocation2Page {

  getValueAddress = {} ;
  places = ['Central Ladpao','Central Praram 9','The Street'];
  valuePlace : string;

  // fireAddress = firebase.database().ref('/address');

  constructor(private route: Router, private router: ActivatedRoute) {
    const getValue = this.router.snapshot.paramMap.get("district")
    console.log('getValue', getValue);
    this.getValueAddress =  JSON.parse(getValue);
    console.log('a', this.getValueAddress);
  }

  ionViewDidLoad() {
  }

  selectPlace(){
    console.log('valuePlace',this.valuePlace)
  }

  goHomepage() {
    this.route.navigate(['/home']);
  }

  connectFirebase(){
    const a = {...this.getValueAddress, place : this.valuePlace}
    // this.fireAddress.push(a);
      // console.log('allPost',this.allPost);
  }

  nextPage() {
    this.connectFirebase();
    const a = {...this.getValueAddress, place : this.valuePlace}
    this.route.navigate(['check-location3/'+JSON.stringify(a)]);


    
  }
}
