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
  places = ['Central Ladpao','Central Praram 9','The Street'];

  valueDistrict: string;
  valueSubDistrict: string;
  valuePlace:string;
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
  //  this.arrayAddress = {district: this.valueDistrict, subDistrict: this.valueSubDistrict};
    this.route.navigate(['check-location3/1']);
    // this.navCtrl.push()
  }

  send(){

    const allDataUser = [
      {
      name: 'hi',
      address1: 'ดินแดง',
      address2: 'ห้วยขวาง',
      place:'central',
      time: '19.00'
    },
    {
      name: 'hello',
      address1: 'สุทธิสาร',
      address2: 'ลาดพร้าว',
      place:'lotus'
    },
    {
      name: 'oh',
      address1: 'ดินแดง',
      address2: 'ห้วยขวาง',
      place:'central',
      time: '20.00'
    }
  ]
 
    
    // การทำงาน : ค้นหาจาก3ค่าด้านบน (address1 , address2, place) กับข้อมูลทั้งหมด

    // ผลลัพธ์ = hi,oh
  }
}
