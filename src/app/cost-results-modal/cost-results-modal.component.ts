import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../services/user.service';

import { DebtorInfo } from '../models/debtorinfo';

@Component({
    selector: 'cost-results-modal',
    templateUrl: './cost-results-modal.component.html',
    styleUrls: ['./cost-results-modal.component.css']
})

export class CostResultsModal implements OnInit {

    constructor(public activeModal: NgbActiveModal, private userService: UserService) {}
    costResult: Map<String, DebtorInfo[]>;

    owers: String[] = [];
    payers: DebtorInfo[] = [];

    ngOnInit() {
        this.costResult.forEach((value, key) => {
            this.owers.push(key);

            for (let debtor in value) {
                this.payers.push(value[debtor]);
            }
        });

        console.log(this.payers);
    }
}