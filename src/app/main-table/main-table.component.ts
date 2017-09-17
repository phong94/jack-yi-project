import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersModal } from '../users-modal/users-modal.component';
import { PaymentModal } from '../payment-modal/payment-modal.component';

import { UserService } from '../services/user.service';

import { PaymentInfo } from '../models/paymentinfo';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  constructor(public modalService: NgbModal, private userService: UserService) { }
  
  @Input() userArray: string[] = [];
  @Input() paymentArray: PaymentInfo[] = [];

  // Auto populate properties for table on load to make the page look nice
  emptyTableRows = [1,2,3,4,5];
  rowsAreEmpty: boolean = true;

  ngOnInit() {
    this.userService.userArray.subscribe(
      (response) => this.userArray = response
    );

    this.userService.paymentArray.subscribe(
      (response) => {
        this.paymentArray = response;
        this.rowsAreEmpty = false;
      }
    )
  }

  open() {
    const modalRef = this.modalService.open(UsersModal, {size: "lg"});
  }

  openAddPaymentRowModal() {
    const modalRef = this.modalService.open(PaymentModal, {size: "lg"});
  }

}
