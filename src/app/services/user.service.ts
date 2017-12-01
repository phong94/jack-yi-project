import { Injectable, EventEmitter, Output } from '@angular/core';
import { PaymentInfo } from '../models/paymentinfo';
import { DebtorInfo } from '../models/debtorinfo';

@Injectable()
export class UserService {
    //userArray: string[] = [];
    @Output() userArray = new EventEmitter<string[]>();
    @Output() paymentArray = new EventEmitter<PaymentInfo[]>();
    currUserArray: string[] = [];
    currPaymentArray: PaymentInfo[] = [];
    @Output() finalCostResult = new EventEmitter<Map<String, DebtorInfo[]>>();
}