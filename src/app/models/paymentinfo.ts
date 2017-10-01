import { Payee } from './payee';

export class PaymentInfo {
    constructor(
        public payer: string,
        public item: string,
        public price: number,
        public payees: string[]
    ) {}
}