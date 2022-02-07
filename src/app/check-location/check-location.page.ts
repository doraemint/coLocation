import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-check-location',
  templateUrl: './check-location.page.html',
  styleUrls: ['./check-location.page.scss'],
})
export class CheckLocationPage implements OnInit {

  district = ['ดินแดง','ห้วยขวาง','สุทธิสาร','ลาดพร้าว'];
  subDistrict = ['ดินแดง','ห้วยขวาง','สุทธิสาร','ลาดพร้าว'];

  valueDistrict: string;
  valueSubDistrict: string;
  arrayAddress = {};

  constructor(private route: Router, private navCtrl: NavController) { }

  ngOnInit() {
  }

  goHomepage() {
    this.route.navigate(['/home']);

  }

  selectDistrict(){
    console.log('valueDistrict',this.valueDistrict)
  }

  selectSubDistrict(){
    console.log('valueSubDistrict',this.valueSubDistrict)
  }

  nextPage() {
   this.arrayAddress = {district: this.valueDistrict, subDistrict: this.valueSubDistrict};
    this.route.navigate(['check-location2/'+JSON.stringify(this.arrayAddress)]);
    // this.navCtrl.push()
  }
}
