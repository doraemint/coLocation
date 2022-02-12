import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


export interface Iuser {
  id: number,
  name: string,
  dateOfBirth: string,
  idCard: number,
  address: string,
  phone: number,
  email: string,
  evidance: string,
  date: Date,
  places?: IplacesDetail[]

}
export interface IplacesDetail {
  namePlace?: string,
  places?: string,
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {

  constructor(
    private route: Router,
    private fb: FormBuilder) {
  }

  district = ['ดินแดง', 'ห้วยขวาง', 'สุทธิสาร', 'ลาดพร้าว'];
  subDistrict = ['ดินแดง', 'ห้วยขวาง', 'สุทธิสาร', 'ลาดพร้าว'];

  form: FormGroup;
  isFirstPart = true;
  secondPart = false;
  thirdPart = false;

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: this.fb.control(''),
      dateOfBirth: this.fb.control(''),
      idCard: this.fb.control(''),
      province: this.fb.control(''),
      district: this.fb.control(''),
      subDistrict: this.fb.control(''),
      phone: this.fb.control(''),
      email: this.fb.control(''),
      evidance: this.fb.control(''),
      date: this.fb.control(''),
      places: this.fb.array([])
    });
  }

  get places(): FormArray {
    return this.form.get('places') as FormArray;
  };

  addPlacesForm() {
    const placesForm = this.fb.group({
      namePlace: [''],
      time: [''],
    });
    this.places.push(placesForm);
  }

  goHomepage() {
    this.route.navigate(['/home']);
  }

  goToSecondPart() {
    this.isFirstPart = false;
    this.secondPart = true;
  }

  goToThirdPart() {
    this.secondPart = false;
    this.thirdPart = true;
  }

  submit() {
    this.isFirstPart = true;
    this.thirdPart = false;

    this.route.navigate(['/timeline-end']);

    console.log('form', this.form.value);

  }
}
