import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

    width: number = window.innerWidth;

    lagunaseca = '/assets/IMG_60531.jpg';
    logo = '/assets/RsDayKA.eps';
    constructor() {
        const resizeEvent = Observable.fromEvent(window, 'resize').map(() => {
            return document.documentElement.clientWidth;
        }).debounceTime(200);

        resizeEvent.subscribe(data => {
            this.width = data;
            console.log(this.width);
        })
    }

    ngOnInit() {


        console.log(`width is ${this.width}`);

        // this.images.push(logo1, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo2);
    }

}
