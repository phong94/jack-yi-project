import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { UserService } from '../services/user.service';
import { PaymentInfo } from '../models/paymentinfo';

@Component({
    selector: 'app-payment-modal',
    templateUrl: './payment-modal.component.html',
    styleUrls: ['./payment-modal.component.css']
})

export class PaymentModal implements OnInit {

    constructor(public activeModal: NgbActiveModal, private userService: UserService) {}

    payer: string;
    item: string;
    price: number;
    paymentArray: PaymentInfo[] = this.userService.currPaymentArray;

    ngOnInit() {}

    addNewPaymentRow(f: NgForm) {
        let p = new PaymentInfo(f.value.payer, f.value.item, f.value.price);
        this.paymentArray.push(p);
        this.userService.paymentArray.emit(this.paymentArray);
    }
}