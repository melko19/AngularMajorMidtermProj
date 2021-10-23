import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'scale-rate',
  templateUrl: './scale-rate.component.html',
  styleUrls: ['./scale-rate.component.css']
})
export class ScaleRateComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }

  myimage:string = "assets/images/one.jpg"
  myimage1:string = "assets/images/zoro.jpg"
  myimage2:string = "assets/images/sanji.jpg"
  myimage3:string = "assets/images/nami.jpg"
  myimage4:string = "assets/images/ussoop.jpg"
  myimage5:string = "assets/images/chopper.jpg"
  myimage6:string = "assets/images/nico.jpg"
  myimage7:string = "assets/images/franky.jpg"
  myimage8:string = "assets/images/brook.jpg"
  myimage9:string = "assets/images/jinbe.jpg"
  currentRate = 0;

  scale = [1,1,1,1,1];
  rate = 0;

  onClick(rate: number){
    this.rate = rate;
    console.log(rate)
  }

  

}
