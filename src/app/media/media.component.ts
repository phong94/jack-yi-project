import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit {
    
    images: string[] = [];

    width: number = window.innerWidth;

    constructor() { 
        const resizeEvent = Observable.fromEvent(window, 'resize').map(() => {
            return document.documentElement.clientWidth;
        }).debounceTime(200);

        resizeEvent.subscribe(data => {
            this.width = data;
        })
    }

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

        console.log(`width is ${this.width}`);

        this.images.push(logo1, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo2);
    }

}
