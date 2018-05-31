import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: string[] = [];
  constructor() { }

  ngOnInit() {
    let logo1 = '/assets/icon1.png';
    let logo2 = '/assets/icon2.jpeg';
    let logo3 = '/assets/icon3.svg';
    let logo4 = '/assets/icon4.png';
    let logo5 = '/assets/icon5.png';
    let logo6 = '/assets/icon6.png';
    let logo7 = '/assets/icon7.png';
    let logo8 = '/assets/icon8.png';
    let logo9 = '/assets/icon9.png';
    let logo10 = '/assets/icon10.svg';

    this.images.push(logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10);
  }

}
